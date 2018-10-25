var EventEmitter = require('events');

// Base function.
var User = function(props) {
    var options = {};
    var toJson = function() {
        return JSON.stringify({
            name: options.name,
            age: options.age,
            email: options.email,
            active: options.active
        });
    }

    this.construct = function() {
        options.name = props.name || '';
        options.age = props.age || 0;
        options.email = props.email || '';
        options.active = props.active || false;
    };

    this.setName = function(name) {
        options.name = name;
    }

    this.setAge = function(age) {
        options.age = age;
    }
    
    this.setEmail = function(email) {
        options.email = email;
    }

    this.getProp = function(key) {
        if (!options[key]) {
            throw new Error('Property is not found.');
        } else {
            return options[key] || '';
        }
    }

    this.json = function() {
        return toJson();
    };

    this.construct();
};

var satya = new User( {name: 'Satya Nadella'} );
satya.setAge(50);
satya.setEmail('satya.nadella@outlook.com');
try {
    console.log( satya.getProp('pet') );
} catch (e) {
    console.log( e.toString() );
}

// 
(function(prop) {
    console.log( prop );
})({name: 'Zoli'});

// Create event.
const myEvent = new EventEmitter();
myEvent.on('whenItired', function(user) {
    console.log('whenItired event is fired', user);
});
setTimeout(function() {
    let user2 = new User({name: 'Zoli'});
    myEvent.emit('whenItired', 'Pisti');
}, 3000);

