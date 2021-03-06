module.exports.form_inclusao_noticia = function(app, req, res){
    res.render("admin/form_add_noticia", {validacao : {}, noticia: {}});
}

module.exports.noticias_salvar = function(app, req, res){
    var noticia = req.body;

    req.assert('titulo', 'Título é obrigatorio').notEmpty();
    req.assert('resumo', 'Resumo é obrigatorio').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 á 100 cracteries').len(10, 100); 
    req.assert('autor', 'Autor é obrigatorio').notEmpty(); 
    req.assert('data_noticia', 'Data é obrigatorio').notEmpty().isDate({format: 'YYY-MM-DD'});   
    req.assert('noticia', 'Noticia é obrigatorio').notEmpty();
    
    var erros = req.validationErrors();
    console.log(erros)
    if(erros){
        res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia});
        return;
    } 
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(erro, result){
        res.redirect('/noticias')
    });
}