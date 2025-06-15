const express = require('express');
const router = express.Router();

const {
    createUser,
    loginUser
} = require('../controllers/userAuth')

router.post('/create',createUser);

router.post('/login',loginUser);

module.exports = router;