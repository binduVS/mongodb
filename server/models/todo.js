var mongoose = require('mongoose');
var todo = mongoose.model('todo',{
    text:{
        type:String,
        minlength:5
    },
    completed:{
        type:Boolean
    }
})
var todoDATA = new todo(
    {
    text : 'hello',
    completed : false
   }
   )
todoDATA.save().then(
(doc)=>{
     console.log('todoDATA is',doc)
      },      
(e)=>{
      console.log('unable to save');
      }  
)
module.exports={
    todo
}