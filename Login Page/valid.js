function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&&password=="password"){
        window.location.href="E:\\NTL\\postlogin.html";
    }  
    else{
        alert("Invalid Username or Password");
    }


}