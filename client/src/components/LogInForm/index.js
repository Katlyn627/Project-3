var attempt =3; //variable to count number of login attempts
//function executes on click of login button
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "formget" && password == "formget#123"){
        alert ("login succesfully");
        window.location = "login.html" //redirecting 
        return false;
    }
    else{
        attempt --;//decrementing by one
        alert("you have left "+attempt+" attempt;");
        //disabling after 3 failed attempts
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}