function boom(value){
	console.log('value :'+value);
	var prev = '';
	var final = '';
	var flag = false;

	for(var i = 0; i < value.length;i++){
		console.log(value[i]);
		if(value[i] === prev){
			if(final[final.length-1] === prev){
				final = final.substring(0, final.length-1);
			}
            flag = true;
		}else{
           final = final + value[i];
		}
		prev = value[i];
	}
	console.log(' final : '+final);
    if(flag){
    	boom(final);
    }else{
    	console.log(' very final : '+final);
    	return;
    }
}
boom('gssaagffgaar');
//input : gssaagffgaar
//output : r
