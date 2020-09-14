var insertInfo = function (request, response) {
    var connectSQL = require('./connectSQL');
    connectSQL.connectSQL();
    connectSQL.connection.connect();
    var getData = request.body;//获得提交数据
    //应该先查询数据库中是否已存在该账户，若已存在则返回0，提示用户名已被使用，更换用户名。否则插入数据库，进入聊天界面
    var checkSql = "SELECT USERNAME FROM USERINFO";
    connectSQL.connection.query(checkSql, function (err, data) {
        if (err) {
            console.log("查询用户名出错：", err);
            response.send({ result: -1 });
        } else {
            for (var key in data) {
                if (data[key].USERNAME === getData.username) {
                    //用户已存在

                    response.send({ result: 0 });
                    return;
                }
            }
            //用户不存在，插入数据
            var addSql = "INSERT INTO USERINFO(username,password) VALUES(?,?)";
            var addSqlParams = [getData.username, getData.password];
            connectSQL.connection.query(addSql, addSqlParams, function (err, result) {
                if (err) {
                    console.error("插入数据出错：", err);
                    response.send({ result: -1 });
                } else {
                    response.send({ result: 1 });
                }
                connectSQL.connection.end();
            })
        }
    })

}

module.exports = insertInfo;