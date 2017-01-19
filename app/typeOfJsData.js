function log(...value){
	console.log(...value);
}

var value = [];
log(typeof value, value.constructor)
// alert(value.constructor.name)
var value = function() {};
log(typeof value, value.constructor.name)

var os = Object.prototype.toString;
log(Object.prototype.toString.apply(window))
log(os.apply(document))
var htmllist = document.getElementsByTagName('div');
log(os.apply(htmllist))
log(os.apply(htmllist[0]))
var obj = {};
log(os.apply(obj))

function typeOf(o) {
	var _toString = Object.prototype.toString;
	var _type = {
		'undefined' : 'undefined',
		'number':'number',
		'boolean':'boolean',
		'string':'string',
		'[object Function]':'function',
		'[object RegExp]':'regexp',
		'[object Array]':'array',
		'[object Date]':'date',
		'[object Error]':'error'
	}
	return _type[typeof o] || 
				 _type[_toString.apply(o)] || 
				 o ? 'object': 'null';
}

class myclass {
	state = {
		a:'a'
	}

	render() {
		return 'xxx';
	}
}
log(typeof myclass, os.apply(myclass));
var myclass1 = new myclass();
log(typeof myclass1, os.apply(myclass1));

var arr = [];
for(var i = 0; i < 5000000; i++ ){
	arr.push(i);
}
var arr1 = arr.slice();
console.time(1);
for(var i = 0, len = arr1.length; i < len; i++ ) {
}
console.timeEnd(1);

var arr2 = arr.slice();
console.time(2);
arr2.forEach(function(value, index, row) {
})
console.timeEnd(2);

var arr3 = arr.slice();
console.time(3)
arr3 = arr3.map(function(value) {
})
console.timeEnd(3);