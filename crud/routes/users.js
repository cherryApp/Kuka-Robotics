var express = require('express');
var router = express.Router();
const path = require('path');
const DB = require('../modules/db');
const usersDB = new DB(
  path.join(__dirname, '../json/users.json')
);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {title: 'Users'});
});

router.get('/api/user', async (req, res, next) => {
  try {
    let users = await usersDB.readAll();
    res.json(users);
  } catch (e) {
    res.json( {error: e} );
  }
});

router.post('/api/user/:id', (req, res, next) => {
  console.log(req.params.id);
  console.log(req.body);
  res.json({message: 'ok'});
});

router.put('/api/user/:id', (req, res, next) => {
  console.log(req.params.id);
  console.log(req.body);
  res.json({message: 'ok'});
});

router.delete('/api/user/:id', (req, res, next) => {
  console.log(req.params.id);
  res.json({message: 'ok'});
});

module.exports = router;
