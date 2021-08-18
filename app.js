var app = require('./config/server');

var rotaFormInlusaoNoticia = require('./app/routs/form_inclusao_noticia');
rotaFormInlusaoNoticia(app);

var rotaHome = require('./app/routs/home');
rotaHome(app);

var rotaNoticias = require('./app/routs/noticias');
rotaNoticias(app);

app.listen(3000, function(){
    console.log('Servidor ON');
});
