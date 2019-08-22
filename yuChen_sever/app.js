/**
 * Created by 蔡迦密 on 2018/10/28.
 */
//导入模块
const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const index=require("./routers/index");
const order=require("./routers/order");
var app = require('express')();
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('2_caijiami.club.key', 'utf8');
var certificate = fs.readFileSync('1_caijiami.club_bundle.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
var PORT = 4549;
var SSLPORT = 4550;

app.use(cors({
    origin:('*')
}));

httpServer.listen(PORT, function() {
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
});
httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

//   加载第三方模块 express-session
const session = require("express-session")
//7.2:对模块配置
app.use(session({
  secret:"128位随机字符",    //安全字符串
  resave:false,             //请求保存
  saveUninitialized:true,   //初始化保存
  cookie:{
    maxAge:1000 * 60 * 60 * 24
  }
}));

app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(express.static("public"));


//路由挂载
app.use("/index",index);
app.use("/order",order);




