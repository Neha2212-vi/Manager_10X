require('../database/connection.js');
const mongoose = require('mongoose');

const classSchema =  mongoose.Schema({
    class: String,
    studentsCount : Number
});

const classModel =  mongoose.model('class', classSchema);
module.exports = classModel;