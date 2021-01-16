$(document).ready(function () {
    
   

          const submit = document.getElementById('submit');
          const email = document.getElementById('formemail');
          const password = document.getElementById('formpassword');
  
    $.ajax({

        url: "http://localhost:3000/usuarios",
        dataType: 'json',
        data: JSON,
        success: function(obj){
          var arr = Object.keys(obj).map(function(k) { return obj[k] });
                     
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
              
              for(var i=0 ;i<arr.length;i++){
                if(email.value == arr[i].username && password.value == arr[i].userpass){
                    alert('Welcome to SecretRecipe');
                    window.open("index.html")
                    
                }
            
               }
              return false;
          });

        }

    });
    
  

    
    
});
