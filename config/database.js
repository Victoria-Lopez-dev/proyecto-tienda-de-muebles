const mysql = require('mysql2')

const databaseConnection = mysql.createConnection({
  host:'localhost',
  user:'root',
  database:'tiendaMueble',
  // host:process.env.HOST,
  // user:process.env.USER,
  // database:process.env.DB,
  // password:process.env.PASS,
})

databaseConnection.connect((error)=>{
  if(error) {
    console.log(error)
  } else {
    console.log('Servidor esta conectado a MySQL')
  }
})

module.exports = databaseConnection