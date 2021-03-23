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

// custom error messages
form.addEventListener("submit", function (e) {
  e.preventDefault()
  let isValid = true
  const firstField = getField("first")
  cleanContainer(firstField.container)
  if (firstField.field.value.length < 2) {
    isValid = false
    const error = createError("Veuillez entrer 2 caractères ou plus pour le champ du prénom")
    firstField.container.appendChild(error)
    first.style.outline = "solid", "red";
  }
  const lastField = getField("last")
  cleanContainer(lastField.container)
  if (lastField.field.value.length < 2) {
    isValid = false
    const error = createError("Veuillez entrer 2 caractères ou plus pour le champ du prénom")
    lastField.container.appendChild(error)
  }
  const dateField = getField("birthdate")
  cleanContainer(dateField.container)
  if (new Date(dateField.field.value).toString() === 'Invalid Date') {
    isValid = false
    const error = createError("Vous devez entrer votre date de naissance")
    dateField.container.appendChild(error)
  }
  const quantityField = getField("quantity")
  cleanContainer(quantityField.container)
  if (!quantityField.field.value || Number(quantityField.field.value) < 0) {
    isValid = false
    const error = createError("Vous devez choisir une option")
    quantityField.container.appendChild(error)
  }
  const emailField = getField('email')
  cleanContainer(emailField.container)
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) {
    isValid = false
    const error = createError("Adresse mail invalide")
    emailField.container.appenChild(error)
  }
  const conditionsField = getField("checkbox1")
  cleanContainer(conditionsField.container)
  if (!conditionsField.field.checked) {
    const error = createError("Vous devez vérifier que vous acceptez les termes et conditions")
    conditionsField.container.appendChild(error)
  }
  const isOneLocationChecked = Array.from(form.location).find((item) => {
    return item.checked
  })
  
  const locationField = getField("location")
  cleanContainer(locationField.container)
  if (!isOneLocationChecked && Number(locationField.field.value) > 0) {
    isValid = false
    const error = createError('Vous devez sélectionner une ville')
    locationField.container.appenChild(error)
  }

  if (isValid) {
    const validationMessage = document.createElement("div")
    validationMessage.textContent= "message bien envoyé"
    document.querySelector(".validation").style.borderColor = "red";
    form.appendChild(validationMessage)
    validationMessage.setAttribute("class", "validation")
  }
});

// NEW VERSION
const getField = (fieldName) => {
  const container = document.querySelector(`#${fieldName}-field`)
  const field = document.querySelector(`#${fieldName}`)
  return {
    field,
    container,
  }
}

const createError = (errorMessage) => {
  const element = document.createElement('span')
  element.setAttribute("class", "error")
  element.textContent = errorMessage
  element.style.fontSize = "15px";
  element.style.color = "red";
  return element;
}

const cleanContainer = (container) => {
  const errors = container.getElementsByClassName("error")
  for (let error of errors) {
    container.removeChild(error)
  }
}







