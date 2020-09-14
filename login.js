
var queryInfo = function (request, response) {

    var username = request.query.name;
    var password = request.query.password;
    var connectSQL = require('./connectSQL');
    connectSQL.connectSQL();//配置数据库
    var connection = connectSQL.connection;//操作数据库实例
    connection.connect();//连接数据库
    var sql = 'SELECT * FROM userinfo';
    connection.query(sql, function (err, result) {
        if (err) {
            console.log("查询错误:", err);
            return;
        }
        console.log("查询用户资料成功");
        Promise.resolve(result).then((result) => {
            for (var key in result) {
                if (result[key].username === username && result[key].password === password) {
                    response.send({ result: true });
                    break;
                }
            }
            response.send({ result: false });
        },
            (err) => {
                console.error("查询错误：", err);
            })
        connection.end();//关闭数据库连接     
    })
}

module.exports = queryInfo;
