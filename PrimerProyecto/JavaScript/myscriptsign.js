$(document).ready(function () {
  
    const submit = document.getElementById('submit2')
    var email = document.getElementById('formemail');
    var password = document.getElementById('formpassword');
    var password2 = document.getElementById('formpassword2');
    var username = document.getElementById('formname');
    
    submit.addEventListener('click',()=>{
        
        if(email.checkValidity() == true){
            email.style.borderColor = "green";
        }else{
            email.style.borderColor = "orange";
        }
        if(password.checkValidity() == true){
            password.style.borderColor = "green";
        }else{
            password.style.borderColor = "orange";
        }
        if(password2.checkValidity() == true){
            password2.style.borderColor = "green";
        }else{
            password2.style.borderColor = "orange";
        }
        if(username.checkValidity() == true){
            username.style.borderColor = "green";
        }else{
            username.style.borderColor = "orange";
        }
       

        if(password2.validity.valueMissing == false && password.validity.valueMissing == false && 
            password2.validity.patternMismatch == false && password.validity.patternMismatch == false){
                
            if (password.value !=
                password2.value) {
                password2
                .setCustomValidity('Both passwords must match!'); 
            } else {
                password2
                .setCustomValidity(''); 
            }
        }     

    });
    
});

