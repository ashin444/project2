function validate(){
    let email = document.getElementById("email");
    let error = document.getElementById("error");
  
    let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
    if(regexp.test(email.value)){
        error.innerHTML = "Valid";
        error.style.color = "green";
        return true;
    }

    
    if(email.value.trim()==""){
                alert("Fields cannot be empty");
                return false;
             }

    else{
        error.innerHTML = "invalid";
        error.style.color = "red";
        return false;
    }
}