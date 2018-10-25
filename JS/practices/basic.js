/**
 * 1. Írd ki a pillanatnyi időt és dátumot a következő formátumban:
 * Today is: Tuesday
 * Current time is: 10 PM : 30 : 38
 */
var currentDate = new Date();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];
console.log('Today is: ' + days[currentDate.getDay()]);

var dayPart = currentDate.getHours() > 12 ? 'PM' : 'AM';
var cd = currentDate;
var output = `Current time is: ${cd.getHours()} ${dayPart} : ${cd.getMinutes()} : ${cd.getSeconds()}`;
var output = `Current time is:
${cd.getHours()} ${dayPart} : ${cd.getMinutes()} : ${cd.getSeconds()}`;
console.log(output);

function format(strings, ...args) {
    return `${strings[0]}${args[0]}:${args[2]}:${args[3]}`;
}
output = format`Current time is: ${cd.getHours()} ${dayPart} : ${cd.getMinutes()} : ${cd.getSeconds()}`;
console.log(output);
