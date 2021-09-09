function greeting() {
  document.getElementById("hello").innerHTML = "Hello!<br> Nice to see yaa. You are really velcome. <br>I think you are one of the best programmers!";
}
function coding() {
  document.getElementById("code").innerHTML = "This is hard but it works..are you a proffessional coder, I need help, call me on 5555555555 and so on..Is it possible for me to work with Javascript?";
}
function hi() {
  var name = prompt("What is your name?");
  var result = ("I did Javascript for " + " " + name);
  document.getElementById("hi").innerHTML = result;
  console.log(result);
}
