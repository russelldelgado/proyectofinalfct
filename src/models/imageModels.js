const mongoose = require('mongoose')
const {Schema} = mongoose
const path = require('path')

const ImageSchema = new Schema({
    titulo      :{type : String },
    description : {type : String},
    filename    : {type : String},
    views : { type : Number , default : 0 },
    likes : {type : Number , default : 0},
    timestamp : { type : Date , default : Date.now()}
})

//vamos a crear una variale temporal por asi llamarla que no se guardara en la base de datos
//solo se creara temporalmente en nuestra memoria cuando llamemos a este modelo
//es decir esto me quita la extension de los archivos y solo se ve el id de la imagen
ImageSchema.virtual('uniqueId')
.get(function(){
    return this.filename.replace(path.extname(this.filename),'')
}
)

module.exports = mongoose.model('image' , ImageSchema);