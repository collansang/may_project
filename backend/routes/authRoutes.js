const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Ensure this path is correct

router.post('/login', authController.login); // Access login through authController
router.post('/register', authController.register); // Access register through authController

module.exports = router;
