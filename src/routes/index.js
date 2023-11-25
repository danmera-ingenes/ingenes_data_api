const { Router } = require('express');
const webhook = require('./webhook.js');

const router = Router();

router.use('/webhook', webhook);

module.exports = router;