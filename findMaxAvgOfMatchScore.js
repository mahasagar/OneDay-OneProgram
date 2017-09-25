var input = '[   ["Pakistan", 23], ["Pakistan", 127],   ["India", 3],   ["India", 71],  ["Australia", 31], ["India", 22],  ["Pakistan", 81]]';

var keyValueOfCountry = {};
var maxAvg = 0;
var maxAvg_Country = '';
function findAvg(inputString){
     var arrayOfScores = JSON.parse(inputString);
     console.log(arrayOfScores);
     for(var i = 0 ; i < arrayOfScores.length ;i++){
     	if(keyValueOfCountry[arrayOfScores[i][0]]){
	 	  
	 	    keyValueOfCountry[arrayOfScores[i][0]].sum = keyValueOfCountry[arrayOfScores[i][0]].sum + arrayOfScores[i][1] ;
	 	    keyValueOfCountry[arrayOfScores[i][0]].count = keyValueOfCountry[arrayOfScores[i][0]].count + 1;
		 	
		 	if (keyValueOfCountry[arrayOfScores[i][0]].sum !== 0){
		 	        keyValueOfCountry[arrayOfScores[i][0]].avg = keyValueOfCountry[arrayOfScores[i][0]].sum / keyValueOfCountry[arrayOfScores[i][0]].count
		 	}

	 	   if(maxAvg < keyValueOfCountry[arrayOfScores[i][0]].avg){
	        	maxAvg_Country = arrayOfScores[i][0];
	        	maxAvg =  keyValueOfCountry[arrayOfScores[i][0]].avg;
	        }
	 	}else{
	 		 keyValueOfCountry[arrayOfScores[i][0]] = {
	 		 	'sum'  : arrayOfScores[i][1],
	 		 	'avg' : arrayOfScores[i][1],
	 		 	'count': 1
	 		 }
	        	maxAvg_Country = arrayOfScores[i][0];
	        	maxAvg =  keyValueOfCountry[arrayOfScores[i][0]].avg;
	 	}
	 }
	 return maxAvg_Country;
}


var finalResult = findAvg(input);
console.log('Country : ', finalResult);
console.log('maxAvg : ', maxAvg);

