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
  let userName= prompt('Whats your name?');
  let result= prompt (`Hello ${userName}`);
  const userQuestion= (`Do ${userName} feel lucky today?`);
  prompt(`I will ask you this; ${userQuestion}`);
  const randomNumber= Math.floor(Math.random()* 8);
  let eightBall= '';
  switch (randomNumber) {
    case 0:
    eightBall = 'It´s my lucky day!!';
    break;
    case 1:
    eightBall = 'I will buy a lottery ticket';
    break;
    case 2: 
    eightBall = `Does ${userName} fell lucky?`;
    break;
    case 3:
    eightBall = 'Like a million bucks!';
    break;
    case 4:
    eightBall = 'Lucky people live longer!';
    break;
    case 5:
    eightBall = `Yes, ${userName} do!`;
    break;
    case 6:
    eightBall = 'Like a million bucks?';
    break;
    case 7:
    eightBall = `Not very much, ${userName} is never lucky!`;
    break;
    case 8:
    eightBall = 'I won i billion swedish crowns yesterday!!';
  }
  document.getElementById("ball").innerHTML = prompt(`${eightBall}`);
}

