/**
 * Created by Akesure on 16-4-29.
 */
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
module.exports = {
    User:{
        username:{type:String,required:true},
        password:{type:String,required:true},
        email:{type:String,required:true},
        avatar:{type:String,required:true}
    },
    Article:{
        user:{type:ObjectId,ref:'User'},
        title:String,
        content:String,
        createAt:{type:Date,default:Date.now}
    }
}