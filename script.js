var a = 1, b = 0.5;

// 这是什么鬼
console.log('Hello World');

document.write('Hello World');

// alert('Hello World');

function doSomething(){
	console.log('Hello World');
}

if(a > b){
	doSomething();
}

while(a > b){
	b += 0.1; //b = b + 0.1
	doSomething();
}

for(var i = 0; i < 10; i++){
	doSomething();
}

var number = 1; // 1.0, 1E3
var boolean = true; // false
var string = 'Hello World';

var n = null;
var u = undefined;
var notANumber = NaN;
var inf = Infinity;

var array = ['A', 'B', 'C'];
var object = {a:1, b: 2, c: 3};


var hobby = ['游泳','唱歌','跳舞']
for(i in hobby){
	document.write('<li>' + hobby[i] + '</li>')
}

var taste = {drink:"Tea", meat:"Pork"};

for(key in taste){
    document.write('<li>' + taste[key] + '</li>');
    console.log(key);
}

for(i in hobby){
  document.write('<li>' + hobby[i] + '</li>')
  console.log(i);
}



