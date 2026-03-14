const form = document.querySelector("form");

const nameField = form.querySelector('input[name="text"]');
const emailField = form.querySelector('input[name="email"]');

form.addEventListener("submit", function(e){

  if(nameField.value === "" || emailField.value === ""){
    
    alert("Please fill all fields");
    e.preventDefault();

  } else {

    alert("Feedback Sent Successfully!");

  }

});