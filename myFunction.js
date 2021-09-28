function greeting() {
  document.getElementById("hello").innerHTML = prompt("Hello! Write something and it will show under this button");
}
function coding() {
  document.getElementById("code").innerHTML = ("I am going to apply for Academic works as a 53 year old, do they care about my age or not? What will be the hardest thing to learn regarding coding? Can I get a job as a programmer next year?");
}
function hi() {
  var name = prompt("What is your name?");
  var result = ("I did Javascript for " + " " + name);
  document.getElementById("hi").innerHTML = result;
  console.log(result);
}
function question() {
  let userName= '';
  prompt('Whats your name?');
  userName ? prompt(`Hello, ${userName}!`) : prompt('Hello');
  const userQuestion= 'Do you feel lucky today?';
  prompt(`I asked you; ${userQuestion}`);
  const randomNumber= Math.floor(Math.random()* 8);
  let eightBall= '';
  switch (randomNumber) {
    case 0:
    eightBall = 'It´s your lucky day!!';
    break;
    case 1:
    eightBall = 'Buy a lottery ticket';
    break;
    case 2: 
    eightBall = 'Do I?';
    break;
    case 3:
    eightBall = 'OK, I give up!';
    break;
    case 4:
    eightBall = 'Lucky people lives here!';
    break;
    case 5:
    eightBall = 'Yes, I do!';
    break;
    case 6:
    eightBall = 'Like a million bucks!';
    break;
    case 7:
    eightBall = 'Not very much, no!';
    break;
    case 8:
    eightBall = 'I won i billion swedish crowns!!';
  }
  document.getElementById("ball").innerHTML = prompt(`The husband answered: ${eightBall}`);
}

