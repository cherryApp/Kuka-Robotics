var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const path = require('path');

const DB = require('../modules/db');
let jsonPath = path.join(__dirname, '../json/users.json');
let usersDB = null;
let lastID = 0;

beforeEach('Load db class.', function(done) {
    usersDB = new DB(jsonPath);
    usersDB.load().then( users => {
        // console.log( 'Users loaded: ', users );
        done();
    });
});

describe('Test number of users.', () => {
    it('test .readAll', () => {
        return usersDB.readAll()
            .then( (users) => { 
                let l = users.length;
                expect(Array.isArray(users)).to.be.true; 
            })
            .catch( (e) => { throw new Error(e); });
    });

    it('test .read', () => {
        return usersDB.read(2)
            .then( (user) => { 
                expect(user.id).to.equal(2); 
            })
            .catch( (e) => { throw new Error(e); });
    });
    
    it('test .create', () => {
        let newUser = {name: 'Bibi', email: 'feri@gmail.com'};
        return usersDB.create(newUser)
            .then( (report) => { 
                lastID = report.entity.id;
                expect(report.created).to.equal(1); 
            })
            .catch( (e) => { throw new Error(e); });
    });

    it('test .update', () => {
        let changedUser = {id: lastID, name: 'Bobo', email: 'bobo@gmail.com'};
        return usersDB.update(changedUser)
            .then( (report) => {
                expect(report.entity.name).to.equal('Bobo'); 
            })
            .catch( (e) => { throw new Error(e); });
    });
    
    it('test .delete', () => {
        return usersDB.delete(lastID)
            .then( (report) => {
                expect(report.id).to.equal(lastID); 
            })
            .catch( (e) => { throw new Error(e); });
    });
});