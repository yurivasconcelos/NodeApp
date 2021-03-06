console.log('required book.js');

var mongoose = require('mongoose');

var Book = mongoose.model('usuarios', {
    title:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    category:{
        type: Number
    },
    active:{
        type: Boolean,
        default: false
    }
});

module.exports = {
    Book
}


//we can use this syntax when we don't need to add any methods to the schema.