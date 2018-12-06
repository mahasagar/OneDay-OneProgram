var fs = require('fs');
var messages = fs.readFileSync('boc-messages.txt', 'utf8');
messages = messages.split('\n');

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
function sendMessages(selectedKingdom){
    var count = 0;
    Object.keys(kingdom).forEach(function(oneKingdom) {
      if(selectedKingdom !== oneKingdom){
         var randomMessage = messages[Math.floor(Math.random()*messages.length)];
         var animal=kingdom[oneKingdom];
          console.log('animal :'+animal +' : randomMessage :'+randomMessage);
          var status = checkMessage(randomMessage,animal);
          if(status){
             count++;
          }
      }
    })
    return count;
}
function competingArrangement(inputMessage){
	console.log('inputMessage : '+inputMessage.trim());
	inputMessage = inputMessage.trim();
	var allies = inputMessage.split(' ');
	console.log('allies : ',allies);
	var counting = {};
	for(var i = 0; i < allies.length; i++){
	    var oneAllies = allies[i].toLowerCase();
	    if(!kingdom[oneAllies]){
	        console.log('Wrong Allies!')
            return;
	    }else{
            var animal = kingdom[oneAllies];
            var count = sendMessages(oneAllies);
            console.log('count : '+count);
            counting[oneAllies] = count;
	    }
	}

	console.log('counting : '+JSON.stringify(counting));
	var highestCount = 0;
	var TieAllies =[];
	var winnerAllies = null;
	Object.keys(counting).forEach(function(countAllies) {
	     if(highestCount < counting[countAllies]){
	        highestCount = counting[countAllies];
	        winnerAllies = countAllies;
	     }else if(highestCount == counting[countAllies]){
	        TieAllies.push(countAllies);
	     }
	});
	if(TieAllies.length){
    	console.log('TieAllies : '+JSON.stringify(TieAllies));
	}else{
	    console.log('Winner : '+JSON.stringify(winnerAllies));
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
                  cl.question('Enter the kingdoms competing to be the ruler(space seperated): ', (newData) => {
                  competingArrangement(newData);
                  printFirst();
                });
	             break;

	    }
	  });
}

printFirst();
main();