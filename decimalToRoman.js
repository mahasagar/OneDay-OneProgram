//https://www.geeksforgeeks.org/converting-decimal-number-lying-between-1-to-3999-to-roman-numerals/
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var roman = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
var num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
var stdin = process.openStdin();
var exactMatch = false;
var final = '';
function checkMin(newData){
	var index = 0;
	if(newData > 3999 || newData < 1){
		console.log('wrong data :'+newData);
		return;
	}
	for(var i = 0 ; i < num.length ; i++){
		if(parseInt(newData) === parseInt(num[i])){
			index = i;
			exactMatch = true;
			break;
		}
		if(parseInt(newData) < parseInt(num[i])){
			index = i - 1;
			break
		}
		if(i == (num.length -1)){
			index = i;
		}
	}
	final = final + roman[index];
    newData = newData - parseInt(num[index]);
	if(!exactMatch){
		checkMin(newData);
	}else{
		console.log('roman : ' + final);
	}
}

rl.question('new number : ', (newData) => {
  checkMin(newData);
  rl.close();
});
//new number : 12
//roman :XII
