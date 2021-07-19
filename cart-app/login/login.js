var testEmail = "test@gmail.com";
var testPassword = "test@1234"


function validateUser(event){
    event.preventDefault();
    var validationCheck = true;
    var em= $('#email').val()
     var pwd= $('#password').val()
     document.getElementById('email-alert').style.display = "none";
     document.getElementById('password-alert').style.display = "none";
     if(em != testEmail){
         document.getElementById('email-alert').style.display = "block";
         validationCheck = false;
     }
     if(pwd != testPassword){
        document.getElementById('password-alert').style.display = "block";
        validationCheck = false;
    }
    if(validationCheck == true){
        location.href = "./../home/home.html";
    }
}
