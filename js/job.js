function formFunction(){
  if(document.getElementById("firstName").value == '' || document.getElementById("lastName").value == '' || document.getElementById("birthday").value == '' || document.getElementById("email").value == '' || document.getElementById("phoneNumber").value == ''){
    alert("Please enter all required information.");
  } else if (!document.getElementById("email").checkValidity()){
    alert("Please enter a valid email address.");
  } else if (!document.getElementById("phoneNumber").checkValidity()) {
    alert("Please enter a valid phone number.");
  } else {
    var insides = document.getElementById("insides");
    var successAgain = document.getElementById("successAgain");
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("birthday").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phoneNumber").value = '';
    successAgain.innerHTML = '';

    var successP = document.createElement("p");
    successP.setAttribute("class", "opening");
    successP.setAttribute("id", "success");
    successP.innerHTML = "Successfully submitted contact information.<br>We will contact you shortly.";
    successAgain.appendChild(successP);
    insides.appendChild(successAgain);
   }
}
