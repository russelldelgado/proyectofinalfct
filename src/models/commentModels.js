const {Schema , model} = require('mongoose')
const { ObjectId} = Schema;

const commentSchema = new Schema({
    imagen_id : {type  : ObjectId} , 
    email: {type : String },
    name : {type  : String},
    gravatars : {type :String} , 
    comment : {type: String},
    timeStamp : {type : Date , Default : Date.now()}

})

const commentModels = model('Comment' ,commentSchema);

module.exports = commentModels;