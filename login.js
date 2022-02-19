var loginButton = document.getElementById("loginButton");
var registerButton = document.getElementById("registerButton");

loginButton.onclick = function(){
	document.querySelector("#flipper").classList.toggle("flip");
}

registerButton.onclick = function(){
	document.querySelector("#flipper").classList.toggle("flip");
}

function validate(callback){
    var str=/admin/;
    var pas=/12345/;
        var username=document.getElementById("username");
        var password=document.getElementById("password");
        var usererr=document.getElementById("usererr");
        var passerr=document.getElementById("passerr");
        
        var c=0;
        var x;
        var y;
        if(username.value.trim()==""){
            usererr.innerHTML="Username can not be empty";
            usererr.style.color="red";
             x=0;
        } if(password.value.trim()==""){
            passerr.innerHTML="Password can not be empty";
            passerr.style.color="red";
             y=0;
        }
        if(username.value.trim()!=""){
           
            if(username.value.length<6){
                if(str.test(username.value)){
                    x=1;
                    usererr.innerHTML="";
                }else{
                    x=0;
                    usererr.style.color="red";
					usererr.innerHTML="Invalid user name";
                }
                
            }
            else{
                x=0;
                usererr.style.color="red";
                usererr.innerHTML="Invalid user name";
                usererr.log(user.value.length);
            }
        }
        if(password.value.trim()!=""){
            console.log(password.value.length);
            if(password.value.length<6){
                if(pas.test(password.value)){
                    y=1;
                    
                    passerr.innerHTML="";
                }else{
                    passerr.style.color="red";
                    passerr.innerHTML="Invalid password";
                    y=0;
                }
               
                
            }else{
                y=0;
                passerr.style.color="red";
                passerr.innerHTML="Invalid password";
            }
        }
        if(x==1&&y==1){
               var z=callback();
               if(z==true){
                   return true;
               }
        }
        else{
            return false;
        }
	function validate(check){
		return true;
	}
}
