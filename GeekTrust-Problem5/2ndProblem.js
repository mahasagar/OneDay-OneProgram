'use strict';

//Message File
var fs = require('fs');
var messages = fs.readFileSync('boc-messages.txt', 'utf8');
messages = messages.split('\n');

//Input
var stdin = process.openStdin();
const readline = require('readline');
var cl = readline.createInterface( process.stdin, process.stdout );

//Kingdom and Its Animal
var kingdom = {
	space : 'gorilla',
	land : 'panda',
	water : 'octopus',
	ice : 'mammoth',
	air : 'owl',
	fire : 'dragon'
};

//Final Result Format
var result = {
	ruler : null,
	allies : []
}

//Print Options to Select!
function printFirst(){
	console.log('\n ****** Welcome to Tame Of Thrones ******');
	console.log('1 : Who is the ruler of Southeros?');
	console.log('2 : Allies of Ruler?');
	console.log('3 : Send Messages to kingdoms from King Shan!');
	console.log('\nCrtl+c : Exit!');
}

//Check Message contains animal name
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

//Send messages to Kingdom!
function sendMessages(selectedKingdom,competingKingdoms){
    var resultData = {
        count : 0,
        allies : []
    };
    Object.keys(kingdom).forEach(function(oneKingdom) {
		//send message to all kingdom, not to : self and competing kingdom
      	if(selectedKingdom !== oneKingdom && competingKingdoms.indexOf(oneKingdom) < 0){
		    //select random message!
		    var randomMessage = messages[Math.floor(Math.random()*messages.length)];
         	var animal=kingdom[oneKingdom];
          	var status = checkMessage(randomMessage,animal);
          	if(status){
            	resultData.allies.push(oneKingdom);
             	resultData.count++;
          	}
      	}
    })
    return resultData;
}

//select the winner
function winnerSelection(competingKingdomsResult){
	var highestCount = 0;
	var TieAllies =[];
	var tieStringAgain = '';
	var winnerAllies = null;
	Object.keys(competingKingdomsResult).forEach(function(oneCompetingKingdom) {
	     if(highestCount < competingKingdomsResult[oneCompetingKingdom].count){
	        highestCount = competingKingdomsResult[oneCompetingKingdom].count;
	        winnerAllies = oneCompetingKingdom;
	        TieAllies = [oneCompetingKingdom];
	     }else if(highestCount != 0 && highestCount == competingKingdomsResult[oneCompetingKingdom].count){
	        TieAllies.push(oneCompetingKingdom);
	     }
	});
	//IF Tie, pass tie competingKingdoms to competingArrangement funcion.
	if(TieAllies.length > 1){
		tieStringAgain = TieAllies.join(' ');
    	console.log('Tie in : '+tieStringAgain);
    	competingArrangement(tieStringAgain);
	}else if(winnerAllies){
	    result.ruler = winnerAllies;
	    result.allies = competingKingdomsResult[winnerAllies].allies;
	    console.log('*** Done ***');
	}
}

//Option 3 
function competingArrangement(inputMessage){
	inputMessage = inputMessage.trim();
	var competingKingdoms = inputMessage.split(' ');
	//if 0/1 kingdom
	if(competingKingdoms.length < 2){
	    console.log('Atleast 2 competingKingdoms for competing!');
	    return;
	}

	var competingKingdomsResult = {};
	//Send Messages to competingKingdoms
	for(var i = 0;i < competingKingdoms.length;i++){
	    var oneCompetingKingdom = competingKingdoms[i].toLowerCase();
	    if(!kingdom[oneCompetingKingdom]){
	        console.log('Kingdom Not Found!,'+oneCompetingKingdom);
            return;
	    }else{
            var animal = kingdom[oneCompetingKingdom];
			var countResult = sendMessages(oneCompetingKingdom,competingKingdoms);
			competingKingdomsResult[oneCompetingKingdom] = countResult;
	    }
	}

	winnerSelection(competingKingdomsResult);
}
function main(){
    stdin.addListener("data", function(d) {
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