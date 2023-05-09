var mongoose = require("mongoose");
Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/blog");
var modelSchema = new Schema({
    _id: {type:Number, required:true},
    titulo: {type:String, required:true},
    descripcion: {type:String, required:true},
    categoria: {type:String, required:true},
    fecha: {type:Date, required:true},
    comentarios: [{
        autor: {type:String, required:true},
        mensaje: {type:String, required:true},
        fecha: {type:Date, required:true}
    }]
});
model = mongoose.model('posts', modelSchema, 'publis');
module.exports = model;