function greeting() {
  document.getElementById("hello" ).innerHTML=prompt("Hello! Write something and it will show under this button").maximumLength(30);
}
function coding(){
  document.getElementById("code").innerHTML=("I am going to apply for Academic works as a 53 year old, do they care about my age or not? What will be the hardest thing to learn regarding coding? Can I get a job as a programmer next year?");
}
function hi() {
  var name = prompt("What is your name?");
  var result = ("I did Javascript for " + " " + name);
  document.getElementById("hi").innerHTML = result;
  console.log(result);
}
