const mongoose = require('mongoose');
const logger = require('../config/logger');
const Teacher = require('../models/teacher')
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/profileService';

mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
})
      .then(() => {
            logger.log('info', 'DB connection opened (teacher.js SEEDS FILE)');
      })
      .catch(err => {
            logger.log('info', `DB connection failed (teacher.js SEEDS FILE):: ${err}`);
      });

teacherList = [
      {
            name: 'AK Jha',
            email: 'jha@mnnit.ac.in',
            gender: 'male',
            subject: 'Physics',
            dob: '1970/11/04'
      }
]

const insertTeacherList = () => {
      Teacher.insertMany(teacherList)
            .then(t => {
                  logger.log('info', `teachers added ${t}`);
            })
            .catch(err => {
                  logger.log('info', `error while adding teachers:: ${err}`);
            })
}

insertTeacherList();