var mongoose = require('mongoose')

var baptismSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model('baptism', baptismSchema)