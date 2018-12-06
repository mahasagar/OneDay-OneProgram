
var stdin = process.openStdin();
const readline = require('readline');
var cl = readline.createInterface( process.stdin, process.stdout );

var kingdom = {
	space : 'gorilla',
	land : 'panda',
	water : 'octopus',
	ice : 'mammoth',
	air : 'owl',
	fire : 'dragon'
};
var result = {
	ruler : null,
	allies : []
}
function printFirst(){
	console.log('\n ****** Welcome to Tame Of Thrones ******');
	console.log('1 : Who is the ruler of Southeros?');
	console.log('2 : Allies of Ruler?');
	console.log('3 : Send Messages to kingdoms from King Shan!');
	console.log('\nCrtl+c : Exit!');
}

var question = function(q) {
    return new Promise( (res, rej) => {
        cl.question( q, answer => {
            res(answer);
        })
    });
};

var checkMessage = function(message,animal){
   
   for(var i = 0;i < animal.length; i++){
   	  // console.log(animal[i]);
   	  var index = message.indexOf(animal[i]);
   	  if(index > -1){
   	  	 // console.log(index +' : found : '+animal[i])
   	  	 message = message.replace(animal[i],'');
   	  }else{
   	  	return false;
   	  }
   }
   return true;
};
function sendMessage(inputMessage){
	console.log('inputMessage : '+inputMessage.trim());
	inputMessage = inputMessage.trim();
	var allies = inputMessage.split(',')[0];
	var message = inputMessage.split(',')[1];
	if(!allies || !message){
		console.log('Wrong Message Format!')
		return;
	}
	allies = allies.toLowerCase();
	var message = message.toLowerCase().trim();
	if(kingdom[allies]){
		var animal = kingdom[allies];
		var status = checkMessage(message,animal);
		if(status){
			if(result.allies.indexOf(allies) < 0){
				result.allies.push(allies);
			}else{
				console.log('Already Added!')
			}
			if(result.allies.length > 2){
				result.ruler = 'King Shan';
			}
		}
	}else{
		console.log('kingdom Not Match!')
	}
}
function main(){
    stdin.addListener("data", function(d) {
	    // note:  d is an object, and when converted to a string it will
	    // end with a linefeed.  so we (rather crudely) account for that  
	    // with toString() and then trim() 
	    // console.log("you entered: "+d);
	    switch (parseInt(d)) {
	    	case 1 : 
	            console.log('\nWho is the ruler of Southeros?');
	            var ruler = result.ruler ? result.ruler : 'NONE';
	            console.log(ruler);
	            printFirst();
	    		break;
	    	case 2 : 
	    		 console.log('\nAllies of Ruler?');
	    		 var ruler = (result.ruler && result.allies.length) ? result.allies.toString() : 'NONE';
	            console.log(ruler);
	    		 printFirst();
	    	    break;

	    	case 3 : 
	    		 console.log('\n Messages to kingdoms from King Shan :\n');
	             (async function mainFunction() {
					    var answer;
					    while ( answer !=  0 ) {
					        answer = await question('Input(0 to Exit) : ');
					        if(answer != 0){
					        	 sendMessage(answer);
					        }
					    }
					    printFirst();
					})();
	             break;

	    }
	  });
}

printFirst();
main();
//Sample  : 'Air, oaaawaala
//Land, a1d22n333a4444p
//'Ice, zmzmzmzaztzozh