var express = require('express');
var router = express.Router();
const path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {title: 'Users'});
});

router.get('/api/user', (req, res, next) => {
  let jsonPath = path.join(__dirname, '../json/users.json');
  res.sendFile(jsonPath);
});

router.post('/api/user/:id', (req, res, next) => {
  console.log(req.params.id);
  console.log(req.body);
  res.send('ok');
});

module.exports = router;
