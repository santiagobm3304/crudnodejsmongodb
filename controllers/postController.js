let model = require("../models/post_model");

module.exports = {
    show: function (req, res) {
        model.find()
            .then(resultados => {
                res.render('listar', { posts: resultados });
            })
            .catch(error => {
                res.sendStatus(500);
                console.log(error);
            });
    },
    detail: function (req, res) {
        let val_id = req.params.id;
        model.findOne({ _id: val_id })
            .then(resultados => {
                res.render('detalle', { posts: resultados });
            })
            .catch(error => {
                res.sendStatus(500);
                console.log(error);
            });

    },
    create: function (req, res) {
        let obj = new model;
        obj.titulo = req.body.titulo;
        obj.descripcion = req.body.descripcion;
        obj.categoria = req.body.categoria;
        obj.fecha = req.body.fecha;
        obj.comentarios = req.body.comentarios;
        obj.save()
            .then(newData => {
                res.json(newData);
            })
            .catch(error => {
                console.log(error);
                res.sendStatus(500);
            });

    },
    update: function (req, res) {
        let val_id = req.params.id;
        let datos = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            fecha: req.body.fecha,
            comentarios: req.body.comentarios,
        };
        model.findOneAndUpdate({ _id: val_id }, datos)
            .then(newData => {
                res.json(newData);
            })
            .catch(error => {
                console.log(error);
                res.sendStatus(500);
            });
    },
    delete: function (req, res) {
        let val_id = req.params.id
        model.deleteOne({_id:val_id})
            .then( estado => {
                res.sendStatus(200);
                console.log(estado);
            }) 
            .catch( error => {
                console.log(error);
                res.sendStatus(500);
            });
    }
}; 