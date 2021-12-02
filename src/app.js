const express= require('express');
const app=express();
const routes= require('./routes/tiendaRoutes');
const path= require('path');
const databaseConnection = require('../config/database');
const port= process.env.PORT || 4000;

//coneccion con MySQL
databaseConnection.connect();

//vamos a recibir info en formato JSON
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//uso de EJS y de archivos publicos



app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));



//rutas
app.use("",routes);

/* Como lo escribiamos antes

app.get("/tienda",(req,res)=>{
    res.send("Recibi la peticion GET")
})
*/

app.listen(port,()=>{
    console.log(`Server corriendo en puerto ${port}`)
});