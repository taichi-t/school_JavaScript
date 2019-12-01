// JavaScript Document

var x=15;
if(x>=10){
	console.log('変数xは１０以上です。');
}else{
	console.log('変数xは１０未満です。');
}

var x=30;
if(x>=20){
 console.log('変数Xは２０以上です。');
}else if(x>=10){
		 console.log('変数xは１０以上です。');
		 }else{
			 console.log('変数xは１０未満です。');
		 }

var x=30;
if(x>=10){
	if(x>=20){
		console.log('変数xは２０以上です。');
	}else{
		console.log('変数xは１０以上２０未満です。');
	}
}else{
	console.log('変数xは１０未満です。');
}

var x=15;
if(x>=10)
	console.log('変数xは１０以上です。');
else
	console.log('変数xは１０未満です。');

var x=1;
var y=2;
if(x===1)
	if(y===1)console.log('変数x、yは共に１です。');
else
	console.log('変数xは１ではありません。');


var x=1;
var y=2;
if(x===1){
	if(y===1){
		console.log('変数x、yは共に１です。');
	}
}else{
	console.log('変数xは１ではありません。');
}

var rank='B';
if(rank==='A'){
	console.log('Aランクです。');
}else if(rank==='B'){
	console.log('Bランクです。');
}else if(rank==='C'){
	console.log('Cランクです。');
}else{
	console.log('ランク外です。');
}


var rank='B';
switch(rank){
		case'A':
		console.log('Aランクです。');
		break;
		case'B':
		console.log('Bランクです。');
		break;
		case'C':
		console.log('Cランクです。');
		break;
	default:
		console.log('ランク外です。');
		break;
}

var rank='B';
switch(rank){
		case'A':
		case'B':
		case'C':
		console.log('合格！');
		break;
		case'D':
		console.log('不合格...');
		break;
}

var X='0';
switch(x){
	case 0:
}

var x=10;
while(x<10){
	console.log('xの値は'+x);
	x++;
}

var x=10;
do{
	console.log('xの値は'+x);
	x++;
}while(x<10);

for(var x=8;x<10;x++){
	console.log('xの値は'+x);
}

var data={apple:150,orange:100,banana:120};
for(var key in data){
	console.log(key+'='+data[key]);
}
	

var data={apple:150,orange:100,banana:120};
for(var key in data){
	console.log(key+'='+(data[key])*1.08);
}

var data=['apple','orange','banana'];
for(var key in data){
	console.log(data[key]);
}

var data=['apple','orange','banana'];
Array.prototype.hoge=function(){}
for(var value of data){
	console.log(value);
}

var data=['apple','orange','banana'];
Array.prototype.hoge=function(){}
for(var value of data){
	console.log(value);
}