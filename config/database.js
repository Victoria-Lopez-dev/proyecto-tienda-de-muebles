const mysql = require('mysql2')

const databaseConnection = mysql.createConnection({
  host:'bcq7wkjgujvunj972pbo-mysql.services.clever-cloud.com',
  user:'uz6yxqqazf4h6jyo',
  database:'bcq7wkjgujvunj972pbo',
  password:'3d0xCh3oVJFC71E17rbN',
})

databaseConnection.connect((error)=>{
  if(error) {
    console.log(error)
  } else {
    console.log('Servidor esta conectado a MySQL')
  }
})

module.exports = databaseConnection