var mongoose = require('mongoose')

var baptismSchema = new mongoose.Schema({
    _id: String,
    date: {
        type: String
    },
    title: {
        type: String
    },
    ref: {
        type: String
    },
    href: {
        type: String
    },
    name: String,
    father: String,
    mother: String,
    registerNumber: String,
    year: String
});

module.exports = mongoose.model('baptism', baptismSchema)