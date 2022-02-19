const express = require('express');
const app = express();
const { engine } = require ('express-handlebars');
const sessions = require('express-session')
const cookieParser = require("cookie-parser");

//Import the mongoose module
const mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/database';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("database Connected")
});
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Express-Session
const oneDay = 1000 * 60 * 60 * 24; // creating a day from milliseconds
app.use(sessions({
    secret: "mysecretwordasd",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));

// cookie parser middleware
app.use(cookieParser());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


const Data = new mongoose.Schema({
    username: String   
    });

const User = mongoose.model('Data', Data);


const data = [];

app.get('/', (res,req)=>{
    req.render('about', {layout: 'main.handlebars'})
})

app.get('/createPost', (req,res)=>{
    const user = new User()
    user.username = req.body.username;
    user.save();
    const data = req.body
    res.render('home', { username: data})
})

app.post('/createPost',(req,res)=>{
    res.render('home', { username: req.body.username })
})

app.get('/postList', (req,res)=>{
    User.find({},(err, data)=>{
        // return res.send(data)
        res.render('posts', { data});
    })
})

//Listen 
app.listen(3031);