const mongoose = require('mongoose');

const uri = "mongodb+srv://user:user123@cluster0.yejjh.mongodb.net/anotations?retryWrites=true&w=majority";

mongoose.connect(uri)

module.exports = uri