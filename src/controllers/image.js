const { create } = require("express-handlebars");
const {randomNumber} = require('../helpers/libs')
const path = require('path')
const fs = require('fs-extra')
const {Image} = require('../models/index')

const imagenController = {

    getImagenById : async (req ,res) => {
        res.send('PUES ESTA IMAGEN POR ID');
    },
    createImagen : async (req , res)=>{
        //aqui vamos ha ahcer una recursion

        const saveImages = async()=>{

            const imgUrl = randomNumber();
            const images =  await Image.find({filename : imgUrl})
     
            if(images.length > 0){
                saveImages()
            }else{
                console.log(imgUrl)
                const imageTempPath = req.file.path;
                const ext = path.extname(req.file.originalname).toLowerCase(); //esto me estrae el .png o .jpg .... 
                const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`)
        
                if(ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif'){
                    //esto mueve un archivo de un directorio a otro
                   await fs.rename(imageTempPath , targetPath);
        
                const newImg = new Image({
                    title : req.body.title,
                    filename : imgUrl + ext,
                    description : req.body.description,
        
                })
                  const imagenSave = await newImg.save();
                  //console.log(newImg)
                res.redirect('/image/images/:image_id')
                }else{
                    await fs.unlink(imageTempPath)
                    res.status(500).json({error : 'solo se adime subir imagenes al servidor'})
        
                }
            }

           
        }

        saveImages();

       




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