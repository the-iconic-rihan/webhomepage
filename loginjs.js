function validate() 
{
    let username = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(username == "rihanbagwan5017" && password == "user") 
    {
        alert("login successfull!")
    }
    else if (username != '' || password != "" ) {
        // setMessage("invalid Credentials. PLease signup!" )
        alert("invalid Credentials. PLease signup!" )
    }
}
function signup() {
    if(document.getElementById('form') == "") {
    alert("Registartion successful!")
    }else {
        alert("welcome to registration page.please fill the full credentias.")
    }
}
function set() {
    alert("Please enter the credentials again!")
}
function setMessage(msg) {
    document.getElementById("extradssscsedfsfdw").textContent = msg;
}