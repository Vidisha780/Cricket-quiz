var readlinesync = require('readline-sync');
var chalk = require('chalk');
var score = 0;
var trackScores = [];
const error = chalk.bold.red;
const right = chalk.bold.green;
var questions = [
  question1 = {
   question : "Q1.Which cricketer has scored the most runs at the World Cup ?\n",
    answer : "Sachin Tendulkar"
  },
  question2 = {
   question : "Q2. How many runs did India make in its historic World Cup win over West Indies in 1983 ?\n",
    answer : "183"
  },
  question3 ={
    question : "Q3. Which cricketer scored four hundreds in the 2016 IPL ?\n",
    answer : "Virat Kohli"
  },
  question4 ={
    question : "Q4. Which cricketer has won the most number of IPL titles ?\n",
    answer : "Rohit Sharma"
  },
question5 ={
    question : "Q5. How much runs did MSD score in the 2011 Cricket World Cup Final ?\n",
    answer : "91"
  }

]
function play(){
for(var i =0; i < questions.length; i++)
{
  var currQuestion = questions[i];
  var ans = readlinesync.question(chalk.yellowBright(currQuestion.question));
  if(ans.toLowerCase() === currQuestion.answer.toLowerCase())
  {
    score = score + 5;
    console.log("You entered ",ans.toUpperCase());
    console.log(right("Yay, you are right!"));
  }
  else
  {
    console.log("You entered ",ans.toUpperCase());
    console.log(error("Oops, you are wrong!"));
  }
  console.log(chalk.bgMagenta("Your score is ",score));
  console.log(chalk.yellow("**************************"));
}
}

function maxScore()
{
  return Math.max(...trackScores);
}

function playGame()
{
  var doPlay = 'y';
  while(doPlay === 'y' || doPlay === 'Y')
  {   
    score = 0;
    play();
    console.log(chalk.bgCyan.bold("Your final score is ",score, "!!!"));
    console.log(chalk.yellow("**************************"));
    trackScores.push(score);
    console.log("Your max score is ",maxScore());
    doPlay = readlinesync.question("Do you want to play again?y/n?\n");
    
  }
}
var username = readlinesync.question(chalk.bold.green("Welcome to the quiz - How much do you love Cricket? \nWhat's your name\n"))
console.log(chalk.bold.red("Hi ",username, "! \nLet's check the rules before we begin the game."))
console.log(chalk.bold.red("This is a fun game where you answer a few interesting questions about Indian Cricket. \nLet's see how well do you know the game of cricket.\n1.The correct answer will give you 5 points.\n2.The wrong answer will give you 0 points.\n3.You can type your answer and press enter.\nLets begin the fun game!!!"));
console.log(chalk.yellow("**************************"));
playGame();