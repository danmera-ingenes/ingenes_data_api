const {Router} = require('express');
const { getData } = require('../controllers/webhook.js');

const router = Router();

router.post('/', getData);

module.exports = router;