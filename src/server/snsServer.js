const express = require('express');
var cors = require('cors');
const mysql = require('mysql');
const path = require('path');
const session = require('express-session');
const app = express();
app.use(cors());
app.use(cors());
app.use(session({
    secret: 'test',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

//ejs 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '.')); //.은 경로

// MySQL 연결 설정
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test1234',
    database: 'test'
});
  
connection.connect(function(err) {
    if (err) {
      console.error('Error connecting to MySQL database: ' + err.stack);
      return;
    }
    console.log('db 연결 성공! ' + connection.threadId);
});

app.get('/profile.dox', function (req, res) {
    var map = req.query;
    connection.query(`SELECT * FROM TBL_SNS_USER WHERE USERID =?`, [map.userId], function (error, results, fields) {
        if(error) throw error

        if(results.length == 0){
            res.send({result : "사용자없음"});
        } else {
            res.send(results[0]);
        }
    });
});

//로그인
app.get('/snsUserLogin.dox', (req, res) => {
    var map = req.query;
    console.log(map);
    connection.query("SELECT * FROM TBL_SNS_USER WHERE USERID = ? AND USERPWD = ?", [map.userId, map.userPwd], (error, results, fields) => {
      if (error || results.length == 0) {
        console.log("로그인 실패");
        res.send({ result: "fail" });
        return;
      } else {
        req.session.userId = results[0].userId;
        req.session.userName = results[0].userName; 
        console.log(results[0]);
        res.send({ result: "success", map: results[0] }); 
      }
    });
  });

app.listen(4000)