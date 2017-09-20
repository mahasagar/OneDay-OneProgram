var str = "welccomemoc";



var n = str.length;
console.log('input :'+str);
function checkPalindromeFun(s){
	var flag=1;
	for(var i=0, j=(s.length-1);i<s.length/2;i++,j--)
    {
        if(s[j]!=s[i])
        {
            flag=0;
            break;
        }
    }
    if(flag==1)
        return 1;
    else
    	return 0;
}


for (var len = n; len >= 0; len--){    

        for (var i = 0; i <= n - len; i++){

            var j = i + len - 1;
            var  str1 = "";
            for (var k = i; k <= j; k++){
               str1 = str1 + str[k];
            }

            if(str1 != ''){
            	var checkPalindrome = checkPalindromeFun(str1);
            	if(checkPalindrome){
                    console.log(str1 +" is palindrome with length : "+str1.length );
                    return;
            	}
           }
        }
    }
