var mongoose = require('mongoose');
var user = mongoose.model('user',{
    text:{
        type: String,
        required : true,
        minlength : 5,
        trim : true
    },
    completed:{
        type : Boolean
    },
    completedAt:{
        type : Number
    }
})
var userDATA = new user(
    {
    text:'bindu@gmailom',
    }
)
userDATA.save().then(
    (doc)=>{
        console.log(JSON.stringify(doc,undefined,2));
    },
    (e)=>{
        console.log('unable to save',e)
    })

    module.exports={
        user
    }