const express = require('express')
const router = express.Router();
const imagesController = require('../controllers/image')


router.get('/images/:image_id', imagesController.getImagenById)
router.post('/images', imagesController.createImagen)
router.post('/images/:image_id/like' , imagesController.darLikeAImagen)
router.post('/images/:imagen_id/comment', imagesController.comentarImagen)
router.delete('/images/:id_imagen', imagesController.eliminarImagen)

module.exports = router;