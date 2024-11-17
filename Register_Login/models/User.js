const MONGOOSE = require('mongoose');

const USER_SCHEMA = new MONGOOSE.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bornDate: {
        type: Date,
        required: true
    }
});

module.exports = MONGOOSE.model('User', USER_SCHEMA);