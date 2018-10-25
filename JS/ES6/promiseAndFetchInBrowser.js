async function test() {
	var t = console.time('p');
	try {
		var response = await fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2017-18/en.1');
        console.timeEnd('p'); 
        console.time('p2');
        var json = await response.json();
        console.timeEnd('p2');
		console.log( json );  
    } catch(e) {
		console.error('Error in promise', e);
    }	
	console.log('after try');
}

test();
console.log('log after starting test');