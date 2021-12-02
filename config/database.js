const mysql = require('mysql2')

const databaseConnection = mysql.createConnection({
    host: 'bkchtwxqza3usxhubiem-mysql.services.clever-cloud.com',
    user: 'umaun2jeufkzxywt',
    password:'t5QlMlVt4LzhcUrEO8Hl',
    database: 'bkchtwxqza3usxhubiem',
    
})

databaseConnection.connect((error)=>{
  if(error) {
    console.log(error)
  } else {
    console.log('Servidor conectado a MySQL')
  }
})

module.exports = databaseConnection