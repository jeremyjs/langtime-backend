var Firebase = require('Firebase');

fb = {};
fb.langtime = new Firebase('https://langtime.firebaseio.com');
fb.users    = new Firebase('https://langtime.firebaseio.com/simple/users');
fb.sessions = new Firebase('https://langtime.firebaseio.com/waitingSession');

module.exports = fb;
