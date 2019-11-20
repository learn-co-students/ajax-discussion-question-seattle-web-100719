const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  fetchData();
});

function fetchData() {
  let data = fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(json => displayData(json));
}

function displayData(json){
  const attriburtes = json["results"][0];
  const name = attriburtes.name.first + " " + attriburtes.name.last;
  const email = attriburtes.email;
  const street = attriburtes.location.street.number + " " + attriburtes.location.street.name;
  const city = attriburtes.location.city;
  const state = attriburtes.location.state;
  const postCode = attriburtes.location.postcode;
  const phone = attriburtes.phone;
  const cell = attriburtes.cell;
  const dob = attriburtes.dob.date;
  // console.log(attriburtes);
  const nameId = document.getElementById("fullname");
  const emailId = document.getElementById("email");
  const streetId = document.getElementById("street");
  const cityId = document.getElementById("city");
  const stateId = document.getElementById("state");
  const postCodeId = document.getElementById("postcode");
  const phoneId = document.getElementById("phone");
  const cellId = document.getElementById("cell");
  const dobId = document.getElementById("date_of_birth");

  nameId.innerHTML = name;
  emailId.innerHTML = email;
  streetId.innerHTML = street;
  cityId.innerHTML = city;
  stateId.innerHTML = state;
  postCodeId.innerHTML = postCode;
  phoneId.innerHTML = phone;
  cellId.innerHTML = cell;
  dobId.innerHTML = dob;

}
