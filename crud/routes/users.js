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

router.post('/api/user/:id', async (req, res, next) => {
  try {
    let updated = await usersDB.update(req.body);
    res.json(updated);
  } catch (e) {
    res.json( {error: e} );
  }
});

router.put('/api/user', async (req, res, next) => {
  try {
    let created = await usersDB.create(req.body);
    res.json(created);
  } catch (e) {
    res.json( {error: e} );
  }
});

router.delete('/api/user/:id', async (req, res, next) => {
  try {
    let deleted = await usersDB.delete(req.params.id);
    res.json(deleted);
  } catch (e) {
    res.json( {error: e} );
  }
});

module.exports = router;
