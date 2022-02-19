const mongoose = require('mongoose')
const anotationDataSchema = new mongoose.Schema({

    title: String,
    notes: String,
    priority:Boolean
})

module.exports = mongoose.model('anotations',anotationDataSchema)