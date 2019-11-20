const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  addPersonBtn = document.querySelector(".btn");
  addPersonBtn.addEventListener("click", function() {
    fetchData();
  });
});

function fetchData() {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(json => {
      const userData = extractJSON(json.results[0]);
      appendUserData(userData);
    });
}

function extractJSON(person) {
  const hashy = {};
  hashy.name = `${person.name.title}.${person.name.first} ${person.name.last}`;
  hashy.email = person.email;
  hashy.street = `${person.location.street.number} ${person.location.street.name}`;
  hashy.city = person.location.city;
  hashy.state = person.location.state;
  hashy.postcode = person.location.postcode;
  hashy.phone = person.phone;
  hashy.cell = person.cell;
  hashy.dob = person.dob.date.split("T")[0];
  console.log(hashy);
  return hashy;
}

function appendUserData(userData) {
  const fullName = document.querySelector("#fullname");
  fullName.textContent = userData.name;
  const email = document.querySelector("#email");
  email.textContent = userData.email;
  const street = document.querySelector("#street");
  street.textContent = userData.street;
  const city = document.querySelector("#city");
  city.textContent = userData.city;
  const state = document.querySelector("#state");
  state.textContent = userData.state;
  const postcode = document.querySelector("#postcode");
  postcode.textContent = userData.postcode;
  const phone = document.querySelector("#phone");
  phone.textContent = userData.phone;
  const cell = document.querySelector("#cell");
  cell.textContent = userData.cell;
  const dob = document.querySelector("#date_of_birth");
  dob.textContent = userData.dob;
}
