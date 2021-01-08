const express = require('express');
const router = express.Router();
const callbacks = require('../helper/teacher');

router.route('/')
    .get(callbacks.getTeacherList)
    .post(callbacks.addTeacher)
    .patch(callbacks.updateTeacherInfo)
    .delete(callbacks.deleteTeacher)

module.exports = router;