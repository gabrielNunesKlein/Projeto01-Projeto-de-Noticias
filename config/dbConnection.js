var mysql = require('mysql');

var connMySql = function(){
    console.log("Conecxão foi estabelecida")
    return  mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'site_noticias',
        insecureAuth: true
    });
} 

module.exports = function(){
    console.log("O autoload carregou o modulo de conecxao com o bd");
    return connMySql;
}