const express = require('express');
var cors = require('cors');
const mysql = require('mysql');
const path = require('path');
const session = require('express-session');
const app = express();
app.use(cors());


const multer = require('multer');

app.set('trust proxy', 1) // trust first proxy
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

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'img/'); // 파일이 저장될 경로 설정
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); // 파일 이름 설정
    }
});
const upload = multer({ storage: storage });

// 파일(이미지) 업로드
app.post('/upload', upload.single('file'), (req, res) => {
    console.log('파일', req.file);
    res.send({ result: "success" });
});

// 이미지 접근 설정
app.use(express.static(path.join(__dirname, '.')));
  
  
connection.connect(function(err) {
    if (err) {
      console.error('Error connecting to MySQL database: ' + err.stack);
      return;
    }
    console.log('db 연결 성공! ' + connection.threadId);
});

//---------------------------------------------------------------------------------------
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
    let map = req.query;
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

app.post('/snsWriteBoard.dox', (req, res) => { // 게시글 작성
    const map = req.body;
  
    console.log("server map===>>>", req.body);
    // 게시글 정보 삽입
    connection.query("INSERT INTO TBL_SNS_BOARD VALUES (NULL, ?, ?, NOW())", [map.userId, map.contents], (error, results, fields) => {
      if (error) throw error;
  
      // 게시글 작성 성공 시
      const boardNo = results.insertId; // 새로 생성된 게시글의 번호 가져오기
  
      // 이미지 파일 정보 삽입
      const filePaths = req.body.files; // 이미지 파일 경로들
      for (let i = 0; i < filePaths.length; i++) {
        const fileName = filePaths[i].fileName; // 파일명
        const fileOrgName = filePaths[i].fileOrgName; // 원본 파일명
        connection.query("INSERT INTO TBL_SNS_IMAGES (boardNo, filePath, fileName, fileOrgName) VALUES (?, ?, ?, ?)", [boardNo, "img/", fileName, fileOrgName], (error, results, fields) => {
          if (error) throw error;
          console.log("이미지 파일이 성공적으로 삽입되었습니다.");
        });
      }
  
      // 클라이언트에게 응답 전송
      res.send({ message: "게시글 작성 및 이미지 업로드가 완료되었습니다." });
    });
  });

app.listen(4000)