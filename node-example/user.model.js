const {model, Schema} = require("mongoose");

module.exports = model('User', new Schema({name: String, email: String}))