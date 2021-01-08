const mongoose = require('mongoose');
const logger = require('../config/logger');
const Student = require('../models/student')
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/profileService';

mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
})
      .then(() => {
            logger.log('info', 'DB connection opened (student.js SEEDS FILE)');
      })
      .catch(err => {
            console.log('Something went wrong');
            console.log(err);
            logger.log('info', `DB connection failed (student.js SEEDS FILE):: ${err}`);
      });

studentList = [
      {
            name: 'Abhinav Giri',
            gender: 'male',
            regNo: '20174045',
            email: 'abhinav.cs@gmail.com',
            dob: '1999/03/23'
      },
      {
            name: 'Surya Bhai',
            gender: 'male',
            regNo: '20174003',
            email: 'suryabhai.cs@gmail.com',
            dob: '1999/07/13'
      },
      {
            name: 'Swayam 007',
            gender: 'male',
            regNo: '20175062',
            email: 'swayam.ece@gmail.com',
            dob: '2000/02/20'
      },
      {
            name: 'Hemant Sir',
            gender: 'male',
            regNo: '20154000',
            email: 'hemantsir.cs@walmart.com',
            dob: '1997/01/01'
      }
]

const insertStudentList = () => {
      Student.insertMany(studentList)
            .then(s => {
                  logger.log('info', `students added ${s}`);
            })
            .catch(err => {
                  logger.log('info', `error while adding teachers:: ${err}`);
                  console.log(err);
            })
}

insertStudentList();