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
  const userQuestion= (`${userName} , is this your lucky day`);
  prompt(`Hi ${userQuestion}....?`);
  const userAnswer= (`Can I give you money or love or does ${userName} want something else?`);
  prompt(`${userAnswer}`);
  const randomNumber= Math.floor(Math.random()* 8);
  let eightBall= '';
  switch (randomNumber) {
    case 0:
    eightBall = ` I will give a hug and a kiss to ${userName}!!`;
    break;
    case 1:
    eightBall = `${userName} can have a lottery ticket`;
    break;
    case 2: 
    eightBall = `Who is ${userName}.... ?`;
    break;
    case 3:
    eightBall = 'I will give you a million bucks!';
    break;
    case 4:
    eightBall = `Lucky ${userName} lives like a royalty!`;
    break;
    case 5:
    eightBall = `Time ...${userName} , a lots of time to do what ever you want!`;
    break;
    case 6:
    eightBall = `${userName} will get a big house and a really nice garden?`;
    break;
    case 7:
    eightBall = `I will give nothing to ${userName} !`;
    break;
    case 8:
    eightBall = `Food, shelter, water and a beer for ${userName}!!`;
  }
  document.getElementById("ball").innerHTML = prompt(`${eightBall}`);
  

}

