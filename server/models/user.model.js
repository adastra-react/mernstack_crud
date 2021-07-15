const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 5
    },
    email: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 5
    },
    igc: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 0
    },
    ping: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 1
    },
}, {
    timestamp: true,
})