const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userID: { type: String, required: true},
    name: { type: String, required: true },
    pin: { type: String, required: true },
    igc: { type: String, required: true },
}, {
    timestamp: true,
})