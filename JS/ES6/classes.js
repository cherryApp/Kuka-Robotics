// Define a class.
class Person {
    constructor(...args) {
        this.props = [];
        for (let prop of args) {
            this.props.push(prop);
        }
    }

    whoIam() {
        return this.props.join(', ');
    }
}

let piri = new Person('Kiss Piroska', 32, 'Bátonyterenye');
console.log( piri.whoIam() );

class Worker extends Person {
    constructor(...args) {
        super(...args);
        this.options = {};
    }

    get power() {
        return `My power is: ${this.options.power}!`;
    }

    set power(strong) {
        if (typeof strong == 'number') {
            this.options.power = strong;
        }
    }
}
Object.defineProperty(Worker, 'options', {
    value: {}
});

let sanyi = new Worker('Nagy Sándor');
sanyi.power = 20;
console.log( sanyi.power );
