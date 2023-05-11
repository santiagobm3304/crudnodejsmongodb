var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/blog");
var modelSchema = new Schema({
    autor: {type:String, required:true},
    mensaje: {type:String, required:true},
    fecha: {type:Date, required:true}
});
comment = mongoose.model('comentarios', modelSchema, 'comentarios');
module.exports = comment;