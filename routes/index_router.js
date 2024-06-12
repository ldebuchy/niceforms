const express = require('express');
const router = express.Router();
const display = require('../controllers/index_controller');
const {auth} = require('../middleware/auth');

router.get('/', display.home);

router.get('/login', display.login);
router.get('/register', display.register);
router.get('/logout', display.logout)

router.get('/admin/', display.admin_home);
router.get('/admin/user', display.admin_user);

module.exports = router;
