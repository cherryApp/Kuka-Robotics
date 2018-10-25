// Old way.
function sajt(one, two) {
    return one + two;
}
// =>
var sajt = (one, two) => {
    return one + two;
};
// =>
var sajt = (one, two) => one + two;
// when is one argument
var sajt = one => one * 2;
var sajt = () => console.log('gorgonzola');

// Spread operator.
function palacsinta() {
    console.log(arguments);
}
// =>
var palacsinta = (liszt, tojas, ...cuccok) => {
    console.log(`Kell bele ${liszt}kg liszt és ${tojas}db tojás, 
    de mehet még bele ${cuccok.join(', ')} is.`);
};
palacsinta(1, 5, 'vaníliás cukor', 'tej', 'szóda');