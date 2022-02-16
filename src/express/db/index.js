const { Pool } = require('pg');
const config = require('../config/db_config.json');
const pool = new Pool(config[process.env.NODE_ENV]);

exports.query = (text, params, callback) => {
  return pool.query(text, params, callback);
};
