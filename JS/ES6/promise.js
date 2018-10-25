// Simple promise.
const myPromise = new Promise( (resolve, reject) => {
    setTimeout(()=> {
        resolve();
    }, 2000);
});

myPromise.then( (data) => {
    console.log('Promise successfull.');
}).catch( (e) => {
    console.error('Promise was rejected.');
});

console.log( 'After then promise.' );

// Promise.all
var p1 = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('p1'), 1000 );
});

var p2 = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('p2'), 3000 );
});

Promise.all([p1, p2])
    .then(values => console.log(values))
    .catch(e => console.error(e));

Promise.race([p1, p2])
    .then(value => console.log(value))
    .catch(e => console.error(e));