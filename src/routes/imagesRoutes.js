const express = require('express')
const router = express.Router();
const imagesController = require('../controllers/image')


router.get('/images/:image_id', imagesController.getImagenById)
router.post('/images', imagesController.createImagen)

module.exports = router;