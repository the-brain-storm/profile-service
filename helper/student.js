const logger = require('../config/logger');
const Student = require('../models/student');
const callbacks = {};

callbacks.getStudentList = (req, res) => {
      Student.find(req.query)
            .then(s => {
                  logger.log('info', `Fetched student's list`);
                  res.json(s);
            })
            .catch(err => {
                  logger.log('info', `Error while fetching student's list: ${err}`);
                  res.status(404).json({ message: err.message });
            })
}

callbacks.addStudent = ( req, res ) => {
      const student = new Student( req.body );
      callbacks.addStudent = (req, res) => {
      const student = new Student(req.body);
      student.save()
            .then(s => {
                  logger.log('info', `successfully added students in DB`);
                  res.json(s);
            })
            .catch(err => {
                  logger.log('info', `ERROR failed to add students in DB: ${err}`);
                  res.status(404).json({ message: err.message });
            })
      }
}

callbacks.updateStudentInfo = (req, res) => {
      const { _id } = req.query;

      if (!_id) {
            logger.log('info', 'id to be updated is not specified!');
            res.status(404).json({ message: 'id to be updated is not specified !' });
      }

      Student.findByIdAndUpdate(_id, req.body, { new: true })
            .then(s => {
                  logger.log('info', `Successfully updated ${_id} info`);
                  res.json(s);
            })
            .catch(err => {
                  logger.log('info', `ERROR failed to update students info: ${err}`);
                  res.status(404).json({ message: err.message });
            })
}

callbacks.deleteStudent = (req, res) => {
      const { _id } = req.query;

      if (!_id) {
            logger.log('info', 'id to be deleted is not specified');
            res.status(404).json({ message: 'id to be deleted is not specified !' });
      }

      Student.findByIdAndDelete(_id)
            .then(s => {
                  logger.log('info', `successfully deleted ${_id} from DB`);
                  res.json(s);
            })
            .catch(err => {
                  logger.log('info', `ERROR failed to delete ${_id}: ${err}`);
                  res.status(404).json({ message: err.message });
            })
}

module.exports = callbacks;