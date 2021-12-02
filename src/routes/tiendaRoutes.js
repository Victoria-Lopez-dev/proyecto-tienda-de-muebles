const express= require('express');

/* hacer el ruteo, decir el recorrido que tiene que hacer al recibir una peticion*/

const routes=express.Router();

const {
    renderHome,
    getAllProducts,
    getForm,
    addnewProduct
} =require('../controllers/tiendaControllers')


/*
const rederHome= require ('../controllers/tiendaControllers')
const getAllProducts= require ('../controllers/tiendaControllers')
...
*/


routes.get("/",renderHome);


routes.get("/productos",getAllProducts);

routes.get("/nuevoProducto",getForm);

routes.post("/nuevoProducto",addnewProduct);


module.exports= routes;