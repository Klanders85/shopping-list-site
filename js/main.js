//Setting the arrays//
var produce = ['apples', 'oranges', 'avocado'];
var proteins = ['steak','chicken','bacon'];
var hbc = ['toilet paper', 'toofbrush', 'aspirin'];

var item = prompt("What do you need from the store?");
console.log(item);

function myFunc (){
	$('.produce').empty();
	//loop that prints each value in the array
	for(var i=0; i < produce.length; i++ ){
		$('.produce').append('<li>' + produce[i] + '</li>');
		console.log($('.produce').html());
	}
}
$(document).ready(function(){
	myFunc()
});
