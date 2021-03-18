//un controlador es un objeto que tiene funciones
const {Image } = require('../models/index')
const homeControllers = {

    index : async( req ,res) =>{
        const images = await Image.find().sort({timestamp : -1});
        res.render('index' , {images})
    }

}

module.exports = homeControllers;
