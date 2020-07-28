const express = require('express'); 
const router = express.Router();
const {renderSgnUpForm ,SgnUp ,renderSgninForm ,Sgnin ,logout} = require('../controllers/users.controllers')

router.get('/users/sgnup', renderSgnUpForm);
router.post('/users/sgnup', SgnUp);

router.get('/users/sgnin', renderSgninForm);
router.post('/users/sgnin', Sgnin);
router.get('/users/logout', logout);
module.exports = router