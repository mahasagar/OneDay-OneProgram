var LengaburuArmy = {
	H : 100,
	E : 50,
	AT : 10,
	SG : 5
};

if(!process.argv[2]){
	console.log('Parameter missing!')
	console.log('usage : node lengaburu_vs_falicornia.js \'100 H\'  ');
	process.exit();
}

/*
   ***********   Rules  **************** 
Rule #1. The Power Rule : lengaburu = 2 * falicornia;

Rule #2. The Like-to-Like Rule: l[0] can compare with f[0] only

Rule #3. The Substitution Rule:  2 Horses can replace 1 Elephant same for higher

attacks with 100 H, 101 E, 20 AT, 5 SG
Expected Output: Lengaburu deploys 52 H, 50 E, 10 AT, 3 SG a

Input: Falicornia attacks with 150 H, 96 E, 26 AT, 8 SG
Expected Output: Lengaburu deploys 75 H, 50 E, 10 AT, 5 SG and wins

Input: Falicornia attacks with 250 H, 50 E, 20 AT, 15 SG
Expected Output: Lengaburu deploys 100 H, 38 E, 10 AT, 5 SG and loses

*/

var input = process.argv[2];
input = input.split(',');
var inputObj = {};
for(var i = 0 ; i < input.length ; i++){
	var one = input[i].split(' ');
	if(!one[0] || !one[1] || !LengaburuArmy[one[1]]){
		console.log('\nWrong Parameter String/Check Unneccessary Spaces');
		console.log('Parameter String Example : \'250 H,50 E,20 AT,15 SG\'');
		return;
		process.exit();
	}
	inputObj[one[1].trim()] = parseInt(one[0].trim());
}

console.log('Lengaburu Army : 100 Horses, 50 Elephants, 10 Armoured Tanks and 5 Sling Guns');
console.log('Falicornia attacks with  '+process.argv[2]);




var deployed = {};
var win = true;
var remaining = {};
//Straight Attack
for (var k in inputObj) {
	var value = Math.ceil(inputObj[k]/2);
	if(value <= LengaburuArmy[k]){
		deployed[k] = value;
		LengaburuArmy[k] = LengaburuArmy[k] - value;
	}else{
		win = false;
		deployed[k] = LengaburuArmy[k];
		LengaburuArmy[k] = 0;
		remaining[k] = inputObj[k] -  (deployed[k] * 2) ;
	}
}

//Attack With Adjacent Army if Straight Attack Army is Less
var rules = {
	H : ['E'],
	E : ['H','AT'],
	AT : ['E','SG'],
	SG : ['AT']
}

for (var i in remaining) {
	var remainingKey = i;
	var nearBy = rules[remainingKey];
	// console.log(nearBy);
	if(nearBy[0] && i !== 'H' && i !=='SG'){
		var toDeploy = LengaburuArmy[nearBy[0]] * 2;

		if(toDeploy  >= remaining[i]){
			LengaburuArmy[nearBy[0]] = LengaburuArmy[nearBy[0]] - (remaining[i] * 2);
	    	deployed[nearBy[0]] = deployed[nearBy[0]] + (remaining[i] * 2);
			remaining[i] =  0;
		}else{
			remaining[i] = remaining[i] - toDeploy;
     		LengaburuArmy[nearBy[0]] = LengaburuArmy[nearBy[0]] - (toDeploy/2);
	    	deployed[nearBy[0]] = deployed[nearBy[0]] + (toDeploy/2);
		}
	}

	if(nearBy[1] && i !== 'H' && i !=='SG' && remaining[i] > 0){
		var toDeploy = LengaburuArmy[nearBy[1]] * 2;
		if(toDeploy >= remaining[i]){
			toDeploy = remaining[i];
		}

		remaining[i] = remaining[i] - toDeploy;

		LengaburuArmy[nearBy[1]] = LengaburuArmy[nearBy[1]] - (toDeploy/2);
		deployed[nearBy[1]] = deployed[nearBy[1]] + (toDeploy/2);

	}
	
	if(i == 'H' && remaining[i] > 0){
		var toDeploy = LengaburuArmy[nearBy[0]] * 2;
		if(toDeploy >= remaining[i]){
			toDeploy = remaining[i]/2;
			remaining[i] = 0;
		}
		deployed[nearBy[0]] = deployed[nearBy[0]] + Math.ceil((toDeploy/2));
		LengaburuArmy[nearBy[0]] = LengaburuArmy[nearBy[0]] - Math.ceil((toDeploy/2));
	}
	
	if(i == 'SG' && remaining[i] > 0 && LengaburuArmy[nearBy[0]] > 0){
		var toDeploy = remaining[i] *  2;
		if(toDeploy >= LengaburuArmy[nearBy[0]]){
			remaining[i] = 0;
		}else{
			remaining[i] = remaining[i]  - toDeploy;
		}
		deployed[nearBy[0]] = deployed[nearBy[0]] + toDeploy;
		LengaburuArmy[nearBy[0]] = LengaburuArmy[nearBy[0]] - toDeploy;
	}
	

	if(remaining[i] == 0){
		delete remaining[i];
	}
}

// console.log('remaining : '+JSON.stringify(remaining));
var win = false;
if(Object.keys(remaining).length == 0){
	win = true;
}
var result = 'Loses'
if(win){
  result = 'Won'
}else{
	var remainingArmy = '';
	for (var i in remaining) {
		if(remainingArmy !== ''){
			remainingArmy =remainingArmy + ',';
		}
		remainingArmy =remainingArmy + remaining[i]+' '+ i;
	}
	// console.log('Lengaburu Loss By  '+ remainingArmy);
}
// console.log('\n ' + 'Remaining Army : '+ JSON.stringify(h))

  var deployedArmy = '';
	for (var i in deployed) {
		if(deployedArmy !== ''){
			deployedArmy =deployedArmy + ',';
		}
		deployedArmy =deployedArmy + deployed[i]+ ' '+i;
	}
  console.log('\nLengaburu deploys : '+ deployedArmy + " And " + result)
