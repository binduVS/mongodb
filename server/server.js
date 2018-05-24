var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {todo} = require('./models/todo');
var {user} = require('./models/user');

const port = process.env.PORT || 3000
var app = express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
    var data = new todo({
        text : req.body.text
    })
     
    data.save().then((doc)=>{
     console.log('document contains',doc)
        res.send(doc)
    },(e)=>{
     res.status(400).send(e);
    })
})
app.listen(port,()=>{
    console.log('started connecting 3000');
})

