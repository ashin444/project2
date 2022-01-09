const express = require('express');
// const  bodyParser = require('body-parser');
// const nav = [
//     {
//         link:'/home',name:'Home'
//     }
// ];

const app = express();
// app.use( bodyParser.json());
// app.use(bodyParser.urlencoded({  //to support url encoded bodies
//     extended: true
// }));

app.get('/',function(req,res){
    res.send("Welcome to project2 by Ashin S, Norka FSD B3");
});

// app.post("/signup",(req,res)=>{
//     var uname = req.body.username;
//     var uemail = req.body.useremail;
//     var upassword = req.body.password;

//     console.log("Data Rxd : "+uname + " " + uemail + " " + upassword);
//     console.send("Server Responding: "+uname + " " + uemail + " " + upassword);
// })

app.listen(5000);
