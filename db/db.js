const pg = require('pg')


const db = new pg.Pool({
  database: 'some_db',
})

module.exports = db