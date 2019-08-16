// JavaScript Document

//set up variables and store reference to the form, the email input and the span with class of err_ 
var form = document.querySelector('form'); 
var email = document.getElementById('mail'); 
var firstname= document.getElementById('fstname');
var urage= document.getElementById('urage');
var urcity= document.getElementById('ct');


var letterSet = /^[a-zA-Z]+$/;

var digitSet = /^[0-9]+$/;

var err_ = document.querySelector('.err_');
var err_fstname = document.querySelector('.err_fstname');
var err_urage = document.querySelector('.err_urage');
var err_urcity = document.querySelector('.err_urcity');

var asideHeading=document.querySelector('aside h2');



email.addEventListener("input", function (event) {
  if(email.validity.valid) {
    // If any error message shows, Removal of that is done
    err_.innerHTML = ""; // Message Content resetting
    err_.className = "err_"; // Display Message Resetting
  }  
  
}, false); 

firstname.addEventListener("input", function (event) {
  if(firstname.value.match(letterSet)) {
      // If any error message shows, Removal of that is done
      err_fstname.innerHTML = ""; // Message Content resetting
      err_fstname.className = "err_"; // Display Message Resetting
    }  
  } ,false); 

 

    urage.addEventListener("input", function (event) {
      if(urage.value.match(digitSet)) {
          // If any error message shows, Removal of that is done
          err_urage.innerHTML = ""; // Message Content resetting
          err_urage.className = "err_"; // Display Message Resetting
        }  
      } ,false);

      urcity.addEventListener("input", function (event) {
        if(urcity.value.match('barrie')) {
            // If any error message shows, Removal of that is done
            err_urcity.innerHTML = ""; // Message Content resetting
            err_urcity.className = "err_"; // Display Message Resetting
          }  
        } ,false); 

        
           

      

form.addEventListener("submit", function(event) {
  //each time the user tries to send the date, we are going to check if the email field is valid 
  if(!email.validity.valid) {
    // Invalid field , showing error message 
    err_.innerHTML = "Put a valid email!"; 
    err_.className = "err_ active"; 
  // Default action prevention from the wrong submission of data to form
    event.preventDefault();  
  }
  if(!firstname.value.match(letterSet)) {
    // Invalid field , showing error message 
    
    err_fstname.innerHTML = "Enter Valid name!"; 
    err_fstname.className = "err_ active"; 
  // Default action prevention from the wrong submission of data to form
    event.preventDefault();  
  }
 
  if(!urage.value.match(digitSet)) {
    // Invalid field , showing error message 
    
    err_urage.innerHTML = "Please enter vaid age!"; 
    err_urage.className = "err_ active"; 
  // Default action prevention from the wrong submission of data to form
    event.preventDefault();  
  }

  
  if(!urcity.value.match('barrie')) {
    // Invalid field , showing error message 
    
    err_urcity.innerHTML = "Please write barrie!"; 
    err_urcity.className = "err_ active"; 
  // Default action prevention from the wrong submission of data to form
    event.preventDefault();  
  }



}, false); 


