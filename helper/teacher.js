const logger = require('../config/logger');
const Teacher = require('../models/teacher');
const callbacks = {};

callbacks.getTeacherList = (req, res) => {
    Teacher.find(req.query)
        .then(t => {
            logger.log('info', `Fetched teacher's list`);
            res.json(t);
        })
        .catch(err => {
            logger.log('info', `Error while getting teacher's list: ${err}`);
            res.status(404).json({ message: err.message });
        })
}

callbacks.addTeacher = (req, res) => {
    const teacher = new Teacher(req.body);
    teacher.save()
        .then(t => {
            logger.log('info', `Successfully added teachers to DB`);
            res.json(t);
        })
        .catch(err => {
            logger.log('info', `ERROR failed to add teachers in DB: ${err}`);
            res.status(404).json({ message: err.message });
        })
}

callbacks.updateTeacherInfo = (req, res) => {
    const { _id } = req.query;

    if (!_id) {
        logger.log('info', 'id to be updated is not specified!');
        res.status(404).json({ message: 'id to be updated is not specified!' });
    }

    Teacher.findByIdAndUpdate(_id, req.body, { new: true })
        .then(t => {
            logger.log('info', `Successfully updated ${_id} info`);
            res.json(t);
        })
        .catch(err => {
            logger.log('info', `ERROR failed to update teachers info: ${err}`);
            res.status(404).json({ message: err.message });
        })
}

callbacks.deleteTeacher = (req, res) => {
    const { _id } = req.query;

    if (!_id) {
        logger.log('info', 'id to be deleted is not specified');
        res.status(404).json({ message: 'id to be deleted is not specified!' });
    }

    Teacher.findByIdAndDelete(_id)
        .then(t => {
            logger.log('info', `successfully deleted ${_id} from DB`);
            res.json(t);
        })
        .catch(err => {
            logger.log('info', `ERROR failed to delete ${_id}: ${err}`);
            res.status(404).json({ message: err.message });
        })
}

module.exports = callbacks;