/*-- routes/users.js
   Pratheepan Gunaratnam
   Student id :- 301320478
   23-02-23

*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
