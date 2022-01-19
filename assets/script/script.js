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
  currentHour = moment().format("H");
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
function saveInput(e) {
  //save button disappears on save
  e.target.style.display = "none";
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
  button.style.display = "none";
  button.addEventListener("click", saveInput);
}

// save button appears when input is changed
for (i = 0; i < inputArray.length; i++) {
  inputArray[i].addEventListener("input", function (e) {
    // e.target.parentElement.parentElement.lastElementChild.lastElementChild.style.display =
    //   "block";
    console.log(e.target.parent())
  });
}

// inputArray[0].addEventListener("input", function () {
//   $(`#button${1}`).removeClass("btn-success");
//   $(`#button${1}`).addClass("btn-outline-success");
// });

// inputArray[1].addEventListener("input", function () {
//   $(`#button${2}`).removeClass("btn-success");
//   $(`#button${2}`).addClass("btn-outline-success");
// });

// inputArray[2].addEventListener("input", function () {
//   $(`#button${3}`).removeClass("btn-success");
//   $(`#button${3}`).addClass("btn-outline-success");
// });

// inputArray[3].addEventListener("input", function () {
//     $(`#button${4}`).removeClass("btn-success");
//     $(`#button${4}`).addClass("btn-outline-success");
//   });
