const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name : String,
    email : String,
    password : String,
    age : Number
});

module.exports = model('users', mySchema);

// sender: String
// image: String
// like: {type : Number, default : 0}
// comment: {type : Number, default : 0}
// share: {type : Number, default : 0}