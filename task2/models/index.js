const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodetask',
})

con.connect((err) => {
  if (err) {
    console.log(err.sqlMessage)
  } else {
    console.log('Database Connected Sucessfully.....')
  }
})

module.exports = con
