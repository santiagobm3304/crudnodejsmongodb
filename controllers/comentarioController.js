let model = require("../models/post_model");
let comment = require("../models/comentario_model");

module.exports = {
    show: function (req, res) {
        model.find({}, { comentarios: 1, _id: 0 })
            .then(resultados => {
                res.json(resultados);
            })
            .catch(error => {
                res.sendStatus(500);
                console.log(error);
            });
    },
    create: function (req, res) {
        let comentario ={ 
            autor : req.body.autor,
            mensaje : req.body.mensaje,
            fecha : req.body.fecha
        };
        model.findOneAndUpdate({_id:req.params.id},{$push:{"comentarios":comentario}},{returnOriginal:false})
            .then((data)=>{
                res.send(data);
                console.log(comentario);
                console.log(data);
            })
            .catch((err)=>{
                console.log(err);
            })
    },
    update: function (req, res) {
        let val_id = req.params.id;
        let val_autor = req.body.autor;
        let val_mensaje = req.body.mensaje;
            
        model.findOneAndUpdate({ _id: val_id, "comentarios.autor": val_autor }, { $set: { "comentarios.$.mensaje": val_mensaje } }, {new:true})
            .then(newData => {
                res.json(newData);
            })
            .catch(error => {
                console.log(error);
                res.sendStatus(500);
            });
    }
};
