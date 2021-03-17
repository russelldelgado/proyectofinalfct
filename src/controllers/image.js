const { create } = require("express-handlebars");
const {randomNumber} = require('../helpers/libs')
const path = require('path')
const fs = require('fs-extra')
const imagenController = {

    getImagenById : async (req ,res) => {
        res.send('PUES ESTA IMAGEN POR ID');
    },
    createImagen : async (req , res)=>{
        const imgUrl = randomNumber();
        console.log(imgUrl)
        const imageTempPath = req.file.path;
        const ext = path.extname(req.file.originalname).toLowerCase(); //esto me estrae el .png o .jpg .... 
        const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`)

        if(ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif'){
            //esto mueve un archivo de un directorio a otro
           await fs.rename(imageTempPath , targetPath);
        res.send('copiado correctamente');

        }
        res.send('fallo al envio de la peticion');



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