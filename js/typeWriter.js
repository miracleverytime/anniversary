let i = 0;
let text1 = "Hey! Belek";
let text2 = "Today is the Big Day..";
let speed = 100;

function typeWriter(text, para) {
  if (ok == 2) {
    clearInterval(typeInterval); // Stop the typing animation
  }
  if (i < text.length) {
    document.getElementById(para).innerHTML += text.charAt(i);
    i++;
    speed = Math.random() * 50 + 100; // Randomized speed
  } else {
    if (ok == 0) {
      i = 0; // Reset for the second line
    }
    ok += 1;
  }
}

var typeInterval;

// Start typewriter animation
typeInterval = setInterval(function () {
  if (ok == 0) {
    typeWriter(text1, "txt1");
  } else if (ok == 1) {
    typeWriter(text2, "txt2");
  }
}, 100);
