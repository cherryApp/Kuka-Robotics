// Function definitions.
function adder(one, twoo) {
    return one + twoo;
}

var multi = function(base, m) {
    return base * m;
}

var nums = [1,2,3];
var f = function(el) {
    return el % 2 == 0;
};
var filtered = nums.filter( f );
console.log( filtered );

var mapped = nums.map( function(el) {
    return Math.pow(el, 3);
});
console.log( mapped );

// Method.
var getAge = function() {
    return this.age;
};
var user = {
    __proto__: Array.prototype,
    name: 'Jolán',
    age: 33,
    greet: function() {
        return 'Szia, ' + this.name + ' vagyok.';
    },
    ga: getAge,
    0: true,
    1: 'tr360',
    length: 2
}
console.log( user.length );
for (let i = 0; i < user.length; i++) {
    console.log( user[i] );    
}
console.log( user.ga() );

// Default params.
var createUser = function(name, age, skills) {
    name = name || 'Béla';
    age = age || 40;
    skills[0] = 'C#';
    return {name: name, age: age, skills: skills};
};
var skills = ['Java', 'Frontend', 'Lua'];
var user1 = createUser(null, 33, skills);
console.log( user1 );
console.log( skills );