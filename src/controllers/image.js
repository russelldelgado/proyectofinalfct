const { create } = require("express-handlebars");

const imagenController = {

    getImagenById : async (req ,res) => {
        res.send('PUES ESTA IMAGEN POR ID');
    },
    createImagen : async (req , res)=>{
        res.send('METODO POST PARA CREAR IMAGEN');
    },
    darLikeAImagen: async (req , res) =>{
        res.send('dando likes a las imagenes');
    },
    comentarImagen:async(req , res) =>{
        res.send('dando un comentario a esta foto');
    },
    eliminarImagen : async(req , res) =>{
        res.send('eliminando la imagen de la galeria de imagenes')
    }


}

module.exports = imagenController;