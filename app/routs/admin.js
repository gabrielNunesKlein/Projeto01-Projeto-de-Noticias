module.exports = function(app){
    app.get('/form_inclusao_noticia', function(req, res) {
        res.render("admin/form_add_noticia");
    });
    
    app.post('/noticias/salvar', function(req, res) {
        var noticia = req.body;
        //res.send(noticias);

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(erro, result){
            res.redirect('/noticias')
        });
    });
}