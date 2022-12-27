require('../database/connection.js');
const mongoose = require('mongoose');

const studentSchema =  mongoose.Schema({
    name: String,
    classId : String
});

const studentModel =  mongoose.model('student', studentSchema);
module.exports = studentModel;