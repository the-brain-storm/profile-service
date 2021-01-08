const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
      name: {
            type: String,
            required: true
      },
      regNo: {
            type: String,
            required: true
      },
      sectionId: {
            type: Schema.Types.ObjectId,
            ref : 'Section',
            sparse:true
      },
      email: {
            type: String,
            required: true
      },
      dob: {
            type: Date,
            required: true
      },
      gender:{
            type: String,
            required: true,
            lowercase: true,
            enum: ['male','female','other']
      },
      profileImageUrl: {
            type: String
      },
      rollNo: {
            type: Number,
            min: 1
      },
      mobileNo: {
            type: String
      },
      mothersName: String,
      fathersName: String
});

const Student = mongoose.model('Student', studentSchema );

module.exports = Student;