const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['male', 'female', 'other']
    },
    dob: {
        type: Date,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    mobNumber: {
        type: String
    },
    profielImageUrl: {
        type: String
    }
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
