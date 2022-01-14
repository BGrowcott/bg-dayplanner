const currentDay = $('#currentDay')

function timeKeeper() {
currentDay.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
}
setInterval(timeKeeper, 1000)