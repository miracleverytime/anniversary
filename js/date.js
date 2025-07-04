var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;

function timer() {
  var today = new Date(); // get current date
  var years = today.getFullYear() - 2020;
  var met_date = new Date(2020, 07, 11, 23, 06);
  var anniversary = new Date(today.getFullYear(), 07, 11, 23, 06);
  if (anniversary - today < 0) {
    years += 1;
    anniversary = new Date(today.getFullYear() + 1, 07, 11, 23, 06);
  }

  var t = anniversary - new Date();
  var d = Math.floor(t / 1000 / 60 / 60 / 24);
  var h = Math.floor((t / 1000 / 60 / 60) % 24);
  if (h < 10) h = "0" + h;
  var m = Math.floor((t / 1000 / 60) % 60);
  if (m < 10) m = "0" + m;
  var s = Math.floor((t / 1000) % 60);
  if (s < 10) s = "0" + s;

  if (timesMissing === undefined) {
    timesMissing = Math.floor((today - met_date) / 1000 / 15 / 60);
  }

  document.getElementById("mmm").innerHTML =
    "In these days and nights, I've already missed you " +
    timesMissing +
    " times.";
}

function timer_meet() {
  var start = new Date(2022, 6, 4); // 4 July 2022 (bulan ke-6 karena 0-indexed)
  var now = new Date();
  var t = now - start;

  var d = Math.floor(t / 1000 / 60 / 60 / 24);
  var h = Math.floor((t / 1000 / 60 / 60) % 24);
  if (h < 10) h = "0" + h;
  var m = Math.floor((t / 1000 / 60) % 60);
  if (m < 10) m = "0" + m;
  var s = Math.floor((t / 1000) % 60);
  if (s < 10) s = "0" + s;

  document.getElementById("dm").innerHTML = d;
  document.getElementById("hm").innerHTML = h;
  document.getElementById("mm").innerHTML = m;
  document.getElementById("sm").innerHTML = s;
}

function fadein() {
  if (val < 1) {
    val += 0.025;
    dv.style.opacity = val;
  } else {
    clearInterval(fadeinInterval);
    if (ok == 2) {
      ok += 1;
    }
  }
}

var fadeInterval;
var fadeinInterval;

timer();
timer_meet();
setInterval(timer, 1000);
setInterval(timer_meet, 1000);
fadeInterval = setInterval(function () {
  if (ok == 2) {
    clearInterval(fadeInterval);
    fadeinInterval = setInterval(fadein, 50);
  }
}, 50);
