module.exports.index = function(app, req, res){
    var connection = new app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.get5Noticias(function(erro, result){
        res.render("home/index", {noticias: result});
    });
}