const Knex = require('knex')
const knexTinyLogger = require('knex-tiny-logger').default
const useKnexTracer = require('../tracing/knexTracer')
const { JAEGER_DISABLED } = process.env
const { generateKnexConfig } = require('./dbConfigService')
const { initializeTarnLogging } = require('./logging/tarnLogging')
const { Mutex } = require('async-mutex')

const mutex = new Mutex()
const { KNEX_LOGGING, KNEX_DEBUG } = process.env

const logger = (_format, duration, query) => {
  console.log(`${duration} ${query}`)
}

let cachedDbInstance
const dbInstanceFactory = async () => {
  return await dbInstanceGetOrAdd(() => {
    const {
      DB_HOST: server,
      DB_PORT: port,
      DB_USER: userName,
      DB_PASSWORD: password,
      DB_DATABASE: database,
      DB_INSTANCE_NAME: instanceName,
      DB_TRUST_SERVER_CERTIFICATE: trustServerCertificate
    } = process.env
    const dbConfig = generateKnexConfig({ server, port, userName, password, database, instanceName, trustServerCertificate })
    let dbInstance = new Knex(dbConfig)

    if (!dbInstance) {
      throw new TypeError('Could not create dbInstance. Check the database configuration info and restart the server.')
    }

    if (JSON.parse(KNEX_DEBUG)) {
      initializeTarnLogging(dbInstance.client.pool)
    }

    if (JSON.parse(KNEX_LOGGING)) {
      knexTinyLogger(dbInstance, { logger })
    }
    if (!JSON.parse(JAEGER_DISABLED)) {
      useKnexTracer(dbInstance)
    }
    return dbInstance
  })
}

async function dbInstanceGetOrAdd(factory) {
  if (cachedDbInstance) {
    return cachedDbInstance
  }

  const release = await mutex.acquire()
  try {
    if (cachedDbInstance) {
      return cachedDbInstance
    }

    cachedDbInstance = factory()

    return cachedDbInstance
  } finally {
    release()
  }
}

module.exports = dbInstanceFactory
