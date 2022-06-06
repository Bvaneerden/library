const db = require('../db/db')

const Something = {
  findAll: () => {
    const sql = 'SELECT * FROM somethings'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  create: (name, clue, address) => {
    // RETURNING * gives back the record we've just created with the INSERT statement.

    const sql = `
      INSERT INTO somethings(name, clue, address)
      VALUES ($1, $2, $3)
      RETURNING *
    `

    return db
      .query(sql, [name, clue, address])
      .then(dbRes => dbRes.rows[0])
  },

  delete: (somethingID) => {
    const sql = `
    DELETE FROM somethings WHERE id = $1
    `
    return db.query(sql, [somethingID])
  }
}


module.exports = Something