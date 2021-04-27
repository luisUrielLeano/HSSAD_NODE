const express = require('express');
const { userController } = require('../components/users/userController');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

//= ============== User management endpoints ==================
router.route('/user')
  .get(userController.getUsers());

module.exports = router;
