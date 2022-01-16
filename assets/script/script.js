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
currentDay.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
function timeKeeper() {
  currentDay.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
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
