const winston = require('winston')
winston.level = process.env.LOG_LEVEL || 'silly'
require('winston-logstash')

  winston.add(winston.transports.Logstash, {
    level: 'silly',
    port: 28777,
    node_name: 'Presidente-Demo',
    host: 'elastic.molecularmatch.com',
    max_connect_retries: -1
  })
exports.Strategy = require('./strategy');
exports.SAML = require('./saml').SAML;
