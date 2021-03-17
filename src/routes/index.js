const express = require('express')//vamos a requerir express en este caso no para crear un servidor
                                    //si no mas bien para indicar las rutas de nuestros datos
const router = express.Router();
const  homeControllers  = require( '../controllers/home' )
const imagenRouter = require('./imagesRoutes')



const routes = (app) =>{

    router.get('/' , homeControllers.index );
    router.use('/image' , imagenRouter)


    app.use(router)
}




module.exports = {
    routes,
}