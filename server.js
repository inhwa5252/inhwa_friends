//mongodb 연결
const mongoclient = require('mongodb').MongoClient;
const url = 
'mongodb+srv://inhwa6854:inhwa6854@cluster0.e6rhjvz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
let mydb;
mongoclient.connect(url)
    .then(client => {
        mydb = client.db('myboard');
        //mydb.collection('post').find().toArray().then(result =>{
        //    console.log(result);
        //})

        app.listen(8080,function(){
            console.log("포트 8080으로 서버 대기중...")
        });
    })
    // .catch(err => {
    //console.log(err);
//});

//MySQL + Node.js
var mysql = require("mysql");
var conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "inhwa6854",
    database : "myboard",
});

conn.connect();

//conn.query("select * from post",function (err,rows,fields){
//    if(err) throw err;
//    console.log(rows);
//});

const express = require('express');
const app = express();

//body-parser 라이브러리 추가
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

const db = require('node-mysql/lib/db');app.use(bodyParser.urlencoded
({extended:true}));
app.set('view engine','ejs');

app.get('/list',function(req,res){
    //conn.query("select * from post",function (err,rows,fields){
    //    if(err) throw err;
    //    console.log(rows);
    //});
    mydb.collection('post').find().toArray(function(err,result){
        console.log(result);
    //res.sendFile(__dirname + '/list.html');
        res.render('list.ejs',{data:result});
    })
});

app.get('/book',function(req,res){
    res.send('도서목록 관련 페이지입니다');
});
app.get('/',function(req,res){
    res.render("index.ejs");
});
app.get('/enter',function(req,res){
    res.render('enter.ejs');
});

app.post('/save',function(req,res){
    console.log(req.body.title);
    console.log(req.body.content);
    console.log(req.body.someDate);
    mydb.collection('post').insert(
    {title : req.body.title, content:req.body.content, date:req.body.someDate}
    ).then(result => {
        console.log(result);
        console.log('데이터 추가 성공');
    });
   // let sql = "insert into post (title,content,created) vlaues(?,?,NOW())";
   // let params = [req.body.title, req.body.content];
   // conn.query(sql,params,function(err,result){
   //     if(err) throw err;
   //     console.log('데이터 추가 성공');
   // });
    res.send('데이터 추가 성공');
});

app.get('/content/:id',function(req,res){
    console.log(req.params.id);
    req.params.id = new ObjectId(req.params.id);
    mydb
        .collection("post")
        .findOne({_id : req.params.id})
        .then((result) => {
            console.log(result);
            res.render("content.ejs",{data : result});
        });
});

app.get("/edit/:id",function(req,res){
    req.params.id = new ObjectId(req.params.id);
    mydb
    .collection("post")
    .findOne({_id:req.params.id})
    .then((result) => {
        console.log(result);
        res.render("eidt.ejs", {data : result});
    });

});

app.use(express.static("public"));

let cookieParser = require('cookie-parser');

app.use(cookieParser('dndkdnfksdnfklsddnkd'));
app.get('/cookie',function(req,res){

    let milk = parseInt(req.signedCookies.milk) + 1000;
    if(isNaN(milk)){
        milk = 0;
    }
    res.cookie('milk',milk,{signed : true});
    res.send('product : ' + milk + "원");
});

let session = require('express-session');
app.use(session({
    secret : "dknsflfdsknknfn",
    resave : false,
    saveUninitialized : true
}))

app.get("/session",function(req,res){
    if(isNaN(req.session,milk)){
        req.session.milk = 0;
    }
    req.session.milk = req.session.milk + 1000;
    res.send("session : "+req.session.milk + "원");
});

app.post("/login",function(req,res){
    console.log("아이디 : " +req.body.userid);
    console.log("비밀번호 : " +req.body.userpw);

    mydb
    .collection("account")
    .findOne({userid : req.body.userid})
    .then((result)=>{
        if(result.userpw == req.body.userpw){
        res.send('로그인되었습니다');
        }else{
            res.send('비밀번호가 틀렸습니다');
        }
    });
   
});

app.post("/signup",function(req,res){
    console.log(req.body.userid);
    console.log(req.body.userpw);
    console.log(req.body.usergroup);
    console.log(req.body.useremail);

    mydb
    .collection("account")
    .insetOne({
        userid : req.body.userid,
        userpw : req.body.userpw,
        usergroup : req.body.usergroup,
        useremail : req.body.useremail,
    })
    .then((result) => {
        console.log("회원가입 성공");
    });
   res.redirect("/");
});





