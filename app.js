var express = require('express');
var path = require('path');
var app = express();

//routes
var postRouter = require('./routes/post');

//puerto
var port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('files'));
app.use('/static', express.static('public'));

app.use('/post', postRouter);


app.listen(port, ()=> {
    console.log('Servidor corriendo en la ruta http://localhost:'+port);
});


module.exports = app;