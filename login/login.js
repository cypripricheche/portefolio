function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(username == 'chef' && password == 'xxxxxx') {
        window.location.replace("newpage.html");
        return false;
    }
    else{
        alert("Login Failed");
    }
}

function lpage(){
    window.location.replace("newpage.html")
}