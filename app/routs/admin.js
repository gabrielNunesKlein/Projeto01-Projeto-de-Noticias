module.exports = function(app){
    app.get('/form_inclusao_noticia', function(req, res) {
        //res.render("admin/form_add_noticia", {validacao : {}, noticia: {}});
        app.app.controllers.admin.form_inclusao_noticia(app, req, res);
    });
    
    app.post('/noticias/salvar', function(req, res) {
        app.app.controllers.admin.noticias_salvar(app, req, res);
    });
}