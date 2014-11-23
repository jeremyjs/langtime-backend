var express = require('express');
var mock = require('../test/mock');
var router = express.Router();

/* GET all users. */
router.get('/', function(req, res) {
  res.send(mock.users);
});

/**
 * GET all cards for a user.
 * headers:
 *   uid : string
 * res.body : Card[]
 */
router.get('/cards', require('cards'));

module.exports = router;
