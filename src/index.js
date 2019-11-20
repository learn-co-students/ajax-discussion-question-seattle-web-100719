const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  fetchData();
});

function fetchData() {
  let data = fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( json => displayData(json) )
}

function displayData(json) {
  let attributes = json["results"][0];
  let email = attributes.email; 
  let name = attributes.name.first + " " + attributes.name.last;
  let city = attributes.location.city;
  let street = attributes.location.street.number + " " + attributes.location.street.name;  
  let postCode = attributes.location.postcode;
  let state = attributes.location.state;
  let dob = attributes.dob.date;
  let phone = attributes.phone;
  let cell = attributes.cell;

  const emailDisplay = document.getElementById('email');
  const nameDisplay = document.getElementById('fullname');
  const cityDisplay = document.getElementById('city');
  const streetDisplay = document.getElementById('street');
  const postCodeDisplay = document.getElementById('postcode');
  const stateDisplay = document.getElementById('state');
  const dobDisplay = document.getElementById('date_of_birth');
  const phoneDisplay = document.getElementById('phone');
  const cellDisplay = document.getElementById('cell');

  emailDisplay.textContent = email;  
  nameDisplay.textContent = name;  
  cityDisplay.textContent = city;  
  streetDisplay.textContent = street;   
  postCodeDisplay.textContent = postCode;  
  stateDisplay.textContent = state;  
  dobDisplay.textContent = dob;  
  phoneDisplay.textContent = phone;  
  cellDisplay.textContent = cell;  
}

