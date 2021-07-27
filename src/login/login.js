import './login.scss';
import './../scss/global.scss';
import './../scss/common.scss';
import content from './login.hbs';
import $ from 'jquery';
jQuery.noConflict() ;

var testEmail = "test@gmail.com";
var testPassword = "test@1234"
let loginSection = document.querySelector('.home-content');
const getLoginPageDetails = () => {
    loginSection.innerHTML = content();
}
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
        let item = document.getElementById('home');
        item.click();
    }
}
window.validateUser=validateUser;
document.getElementById("login").addEventListener("click", getLoginPageDetails);