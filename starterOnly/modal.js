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

// ERROR MESSAGES
// first name error
form.addEventListener("submit", function (e) {
  e.preventDefault()
  let isValid = true
  const firstField = getField("first")
  cleanContainer(firstField.container)
  if (firstField.field.value.length < 2 || !firstField.field.value) {
    isValid = false
    const error = createError("Veuillez entrer 2 caractères ou plus pour le champ du prénom")
    firstField.field.style.borderColor = "red";
    firstField.container.appendChild(error)
  }

  // last name error
  const lastField = getField("last")
  cleanContainer(lastField.container)
  if (lastField.field.value.length < 2) {
    isValid = false
    const error = createError("Veuillez entrer 2 caractères ou plus pour le champ du prénom")
    document.querySelector("#last-field").style.borderColor = "red";
    lastField.container.appendChild(error)
  }

  //birthdate error
  const dateField = getField("birthdate")
  cleanContainer(dateField.container)
  if (new Date(dateField.field.value).toString() === 'Invalid Date') {
    isValid = false
    const error = createError("Vous devez entrer votre date de naissance")
    dateField.container.appendChild(error)
  }

  // tournament error
  const quantityField = getField("quantity")
  cleanContainer(quantityField.container)
  if (!quantityField.field.value || Number(quantityField.field.value) < 0) {
    isValid = false
    const error = createError("Vous devez choisir une option")
    quantityField.container.appendChild(error)
  }

  // email error
  const emailField = getField('email')
  cleanContainer(emailField.container)
  console.log(emailField)
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(emailField.field.value)) {
    isValid = false
    const error = createError("Adresse mail invalide")
    emailField.container.appendChild(error)
  }

  // conditions error
  const conditionsField = getField("conditions")
  cleanContainer(conditionsField.container)
  if (!conditionsField.field.checked) {
    isValid = false
    const error = createError("Vous devez vérifier que vous acceptez les termes et conditions")
    conditionsField.container.appendChild(error)
  }

  // location error
  const isOneLocationChecked = Array.from(form.location).find((item) => {
    return item.checked
  })
  
  const locationField = getField("location")
  cleanContainer(locationField.container)
  if (!isOneLocationChecked && Number(quantityField.field.value) > 0) {
    isValid = false
    const error = createError('Vous devez sélectionner une ville')
    locationField.container.appendChild(error)
  }

  // validation message
  if (isValid) {
    const validationMessage = document.createElement("div")
    validationMessage.textContent= "message bien envoyé"
    form.appendChild(validationMessage)
    validationMessage.setAttribute("class", "validation")
  }
});

// field selection
const getField = (fieldName) => {
  const container = document.querySelector(`#${fieldName}-field`)
  const field = document.querySelector(`#${fieldName}`)
  return {
    field,
    container,
  }
}

// error message
const createError = (errorMessage) => {
  const element = document.createElement('span')
  element.setAttribute("class", "error")
  element.textContent = errorMessage
  element.style.fontSize = "15px";
  element.style.color = "red";
  return element;
}

// clean container function
const cleanContainer = (container) => {
  const errors = container.getElementsByClassName("error")
  for (let error of errors) {
    container.removeChild(error)
  }
}

// message d'erreur conditions même si elles sont checked, le formulaire est envoyé même si les conditions ne sont pas checked
// fermer la modal : check, implémenter les donner du formulaire : check, messages d'erreur : check, message de confirmation à l'envoi : check, tests manuels : todo







