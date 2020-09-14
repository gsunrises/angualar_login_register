var connection;
var connectSql = function () {
    var mysql = require('mysql');
    this.connection = mysql.createConnection({
        host: 'localHost',
        user: 'root',
        password: "root",
        port: '3306',
        database: 'wechat'
    });
}

module.exports = {
    connectSQL: connectSql,
    connection: connection
}