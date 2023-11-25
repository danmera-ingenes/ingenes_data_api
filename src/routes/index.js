const { Router } = require('express');
const webhook = require('./webhook.js');

const router = Router();

router.get('/', (req, res) => {
  res.send('Welcome to the API!');
});
router.use('/webhook', webhook);

module.exports = router;