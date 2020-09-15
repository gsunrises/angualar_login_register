* node 和 mysql

这里的逻辑就是获取前端发过来的内容，然后先进行查询数据库的用户，查看是否同名，同名就不可再使用这个用户名了，不同名就将用户数据插入数据库。

*首先你得在服务端的终端引入node.js的一个框架express；

cnpm install express
或
npm install express

express 官网 https://expressjs.com/


npm install mysql



