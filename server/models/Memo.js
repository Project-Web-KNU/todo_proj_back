const mongoose = require('mongoose');

const MemoSchema = mongoose.Schema({
    "memo": {
        type: String,
        required: [true, 'please provide memo'],
        minlength: 3,
        maxlength: 50
    },
    "date": {
        type: String,
    }
})

module.exports = mongoose.model('Memo', MemoSchema);