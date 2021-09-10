function greeting() {
  document.getElementById("hello" ).innerHTML=prompt("Hello! Write something and it will show under this button");
}
function coding(){
  document.getElementById("code").innerHTML=("You are the proffessional coder I would like to get in touch with.");
}
function hi() {
  var name = prompt("What is your name?");
  var result = ("I did Javascript for " + " " + name);
  document.getElementById("hi").innerHTML = result;
  console.log(result);
}
