var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const path = require('path');

const DB = require('../modules/db');
var usersDB = new DB(path.join(__dirname, '../json/users.json'));

beforeEach('Load db class.', function() {
    console.log( path.join(__dirname, '../json/users.json') );
    console.log(usersDB.fileContent);
});

describe('Test number of users.', function() {
    it('resolves as promised', function() {
        return usersDB.readAll()
            .then( (users) => { expect(users.length).to.equal(4); })
            .catch( (e) => { throw new Error(e); });
    });
});