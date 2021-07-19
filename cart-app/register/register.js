function registerUser(event){
    event.preventDefault();
    var validationCheck = true;
    var firstName = $('#first-name').val()
    var lastName = $('#last-name').val()
    var email= $('#email').val()
    var password= $('#password').val()
    var confirmPassword = $('#confirm-password').val()
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    document.getElementById('first-name-alert').style.display = "none";
    document.getElementById('last-name-alert').style.display = "none";
    document.getElementById('email-alert').style.display = "none";
    document.getElementById('password-alert').style.display = "none";
    document.getElementById('confirm-password-alert').style.display = "none";
    // alert("function called");
    if (firstName){
        firstName = firstName.trim();
    }
    if(firstName == "" || firstName == undefined){
    document.getElementById('first-name-alert').style.display = "block";
    validationCheck = false;
    }
    if (lastName){
        lastName = lastName.trim();
    }
    if(lastName == "" || lastName == undefined){
        document.getElementById('last-name-alert').style.display = "block";
        validationCheck = false;
    }
    if(email == '' || reg.test(email) == false || email == undefined){
        document.getElementById('email-alert').style.display = "block";
        validationCheck = false;
    }
    if(password){
        password=password.trim();
    }
    if(password == "" ||  password.length<6){
        document.getElementById('password-alert').style.display = "block";
        validationCheck = false;
    }
     //character length of password validation  
     if (password.search(/\d/) == -1)  {
         document.getElementById("pswdMessag").innerHTML = "password must contain 1 number";
        }else if (password.search(/[a-zA-Z]/) == -1){
         document.getElementById("pswdMessag").innerHTML = "password must contain 1 alphabat";
         validationCheck= false;
     }
      //minimum password length validation  
    if(confirmPassword == "" || confirmPassword != password || confirmPassword == undefined){
        document.getElementById('confirm-password-alert').style.display = "block";
        validationCheck = false;
    }
    else if (validationCheck == true){
        location.href = "./../login/login.html";
    }
}
