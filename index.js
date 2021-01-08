if (process.env.NODE_ENV !== "production") {
      require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const studentRoutes = require('./routes/student')
const teacherRoutes = require('./routes/teacher');
const logger = require('./config/logger');

// SERVER LISTENING ON 3000
const port = process.env.PORT || 3000

app.listen(port, () => {
      logger.log('info', `App is listening on port ${port}`);
})

app.use(methodOverride('_method'));
app.use(express.json());


// CONNECTING TO DATABASE SERVER
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/profileService';

mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
})
      .then(() => {
            logger.log('info', 'DB CONNECTION OPENED')
      })
      .catch(err => {
            logger.log(`Error while openig DB connection:: ${err}`);

      });


//GENERALISED ROUTES
app.use('/student', studentRoutes);
app.use('/teacher', teacherRoutes);


app.use((req, res) => {
      logger.log('info', 'ERROR: Request to an undefined route address')
      res.status(404).json({});
})