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
router.get('/cards', function(req, res) {
  var uid = req.headers.uid;
  if(!uid) {
    console.log('Header format error: "uid" not found');
    res.send({ responseCode: '501' });
  }
  fb.users.child(uid).child('cards').once('value', function(snap, err) {
    if(!snap) {
      console.log('Firebase error: ', err);
      res.send({ responseCode: '502' });
    }
    var cards = snap.val();
    res.send(cards);
  });
});

module.exports = router;
