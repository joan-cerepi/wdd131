let reviewCounter = localStorage.getItem("counter");
console.log(reviewCounter);
if (reviewCounter) {
  localStorage.counter = Number(localStorage.counter) + 1;
} else {
  localStorage.counter = 1;
}

document.getElementById("reviewNumber").textContent = localStorage.counter;
