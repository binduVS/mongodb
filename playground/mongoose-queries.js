
//const {ObjectID} = require('mongodb');
//const express = require('express');
//const _ = require('lodash');
//const {mongoose} = require('../server/db/mongoose');
//const {todo} = require('../server/models/todo');
//const {user} = require('../server/models/user');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('../server/db/mongoose');
var {todo} = require('../server/models/todo');
const app = express();
app.use(bodyParser.json());

/*if(!ObjectID.isValid){
    console.long('your id is too long');
}
var id = "5b03d6926d3e7551f015e639";
user.findById(id).then((doc)=>{
    console.log('your user object is',doc)
}).catch((e)=>{
    console.log(e);
})*/

/*app.get('/:id',(req,res)=>{
    var id = req.params.id;
    todo.findById(id).then((doc)=>{
        if(!doc){
           return res.status(404).send('unable to find');
        }
      res.status(200).send(doc)
    }).catch((e)=>{
        res.send('unhandles error')
    })

    }


app.listen(3000);
/*

todo.findById(id).then((doc)=>{
    if(!doc){
        return console.log('no matching id')
    }
    console.log('your todo is',doc)
}).catch((e)=>{
console.log(e);
})

todo.find({
    _id:id
}).then((todo)=>{
    if(!todo){
        return console.log('id is not found');
   }
console.log('todo is:',todo)
});*/


app.patch('/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
    console.log(JSON.stringify(body));
  
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
  
    if (_.isBoolean(body.completed) && body.completed) {
      body.completedAt = new Date().getTime();
      console.log('entered in if  condition')
    } else {
      body.completed = false;
      body.completedAt = null;
      console.log('entered in  else condition')
    }
  
    todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }
  
      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    })
  });

  app.listen(3000);