var express = require('express');//引用框架
var bodyParser = require('body-parser');
var app = express();//操作框架的实例对象
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('*', function (req, res, next) {//允许跨域
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", '3.2.1');
    if (req.method == "OPTIONS") res.send(200);
    else next();
});

app.listen(8080, '127.0.0.1');//监听端口

var queryInfo = require('./login')
app.get("/login", queryInfo);//这个对应了前端的get请求

var insertInfo = require('./resister');
app.post("/register", insertInfo);