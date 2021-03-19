function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form")
const closeModal = document.querySelector(".close");
const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const loc1 = document.querySelector("#location1");
const loc2 = document.querySelector("#location2");
const loc3 = document.querySelector("#location3");
const loc4 = document.querySelector("#location4");
const loc5 = document.querySelector("#location5");
const loc6 = document.querySelector("#location6");
const checkbox1 = document.querySelector("#checkbox1");
const checkbox2 = document.querySelector("#checkbox2");
const submit = document.querySelector(".btn-submit");
const confirmationMessage = document.querySelector("#confirmationMessage");
const conditions = document.querySelector("#conditions");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModal.addEventListener("click", closeModalBtn)

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModalBtn() {
  modalbg.style.display = "none";
}

// submit validation
confirmationMessage.style.display = "none";

// custom error messages
first.addEventListener("input", function () {
  console.log(first.validity);
  if (first.validity.tooShort) {
    first.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }
 else {
    first.setCustomValidity("");
  }
});

last.addEventListener("input", function () {
  console.log(last.validity);
  if (last.validity.tooShort) {
    last.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }
  else {
    last.setCustomValidity("");
  }
});

quantity.addEventListener("input", function () {
  console.log(quantity.validity);
  if (quantity.validity.valueMissing) {
    quantity.setCustomValidity("Vous devez choisir une option.");
  } 
  else {
    quantity.setCustomValidity("");
  }
});

birthdate.addEventListener("input", function () {
  console.log(birthdate.validity);
  if (birthdate.validity.valueMissing) {
    birthdate.setCustomValidity("Vous devez entrer votre date de naissance.");
  } else {
    birthdate.setCustomValidity("");
  }
});

quantity.setCustomValidity("Vous devez choisir une option.");
first.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
last.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
birthdate.setCustomValidity("Vous devez entrer votre date de naissance.");



form.addEventListener("submit", function (e) {
  form.style.display = "none";
  const listeRadio = document.querySelector("#liste-radio");
  const errorMessage = document.createElement("span")
  if (document.getElementById("errorMessage")) listeRadio.removeChild(document.getElementById("errorMessage") || null)
    errorMessage.setAttribute("id", "errorMessage")
    console.log(form.location.value);
  if (!form.location.value & Number(quantity.value) > 0) {
    e.preventDefault() 
    console.log(form.location, quantity);
    errorMessage.textContent = "Vous avez choisi un nombre de participations supérieur à 1, merci de sélectionner au moins une ville";
    listeRadio.appendChild(errorMessage);
    return false }

let validationFailed = false;
if (validationFailed) {
e.preventDefault();
return false;
}
else {
  submit.addEventListener("click", closeModalBtn)
  confirmationMessage.style.fontSize = "20px";
  confirmationMessage.style.textAlign = "center";
  confirmationMessage.style.display = "block";
  setTimeout(closeModalBtn(), 1000);
  e.preventDefault();
  return true;
    }
});






