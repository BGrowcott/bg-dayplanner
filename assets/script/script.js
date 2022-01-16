const currentDay = $("#currentDay");
// array time blocks
const hoursArray = [
  $("#8"),
  $("#9"),
  $("#10"),
  $("#11"),
  $("#12"),
  $("#1"),
  $("#2"),
  $("#3"),
  $("#4"),
  $("#5"),
  $("#6"),
];

//current time and day
currentDay.text(moment().format("dddd, MMMM Do YYYY, H:mm:ss"));
function timeKeeper() {
  currentDay.text(moment().format("dddd, MMMM Do YYYY, H:mm:ss"));
}
setInterval(timeKeeper, 1000);

//Change time block colors to represent past/present/future
let currentHour = moment().format("H");
function pastPresentFuture() {
  for (i = 0; i < hoursArray.length; i++) {
    if (currentHour == i + 8) {
      hoursArray[i].addClass("present");
    } else if (currentHour < i + 8) {
      hoursArray[i].addClass("future");
    } else {
      hoursArray[i].addClass("past");
    }
  }
}
// initial render of past/present/future colours
pastPresentFuture();
// rerun every minute so it updates throughout the day
setInterval(pastPresentFuture, 60000);

//saving user input to local storage
let inputArray = $("input");
let inputValues = [];
function saveInput() {
  // buttons.addClass('btn-success')
  // buttons.removeClass('btn-outline-success')
  inputValues = [];
  for (i = 0; i < inputArray.length; i++) {
    inputValues.push(inputArray[i].value);
    localStorage.setItem("timeInputs", JSON.stringify(inputValues));
  }
}

// putting localStorage into page
if (localStorage.getItem("timeInputs") == null) {
  saveInput();
}
renderInputs();
function renderInputs() {
  for (i = 0; i < inputArray.length; i++) {
    inputArray[i].value = JSON.parse(localStorage.getItem("timeInputs"))[i];
  }
}

//save user inputs on save buttons
const buttons = $("button");
for (let button of buttons) {
  button.addEventListener("click", saveInput);
}