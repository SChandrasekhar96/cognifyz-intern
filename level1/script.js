const button = document.querySelector("#mybutton");
button.addEventListener("click", () => {
  button.style.backgroundColor = "#06a7f1";
  alert("Your are welcome");
});
var welcome;
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
if (minute < 10) {
  minute = "0" + minute;
}
if (second < 10) {
  second = "0" + second;
}
if (hour < 12) {
  welcome = "Good Morning Sir Welcome to our Website!";
} else if (hour < 17) {
  welcome = "Good Afternoon Sir Welcome to our Website!";
} else {
  welcome = "Good Night Sir Welcome to our Website!";
}
alert(welcome);
