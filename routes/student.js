const express = require('express');
const router = express.Router();

const callbacks = require('../helper/student');

router.route('/')
      .get(callbacks.getStudentList)
      .post(callbacks.addStudent)
      .patch(callbacks.updateStudentInfo)
      .delete(callbacks.deleteStudent)

module.exports = router;