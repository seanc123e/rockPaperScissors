// user input
const prompt = require('prompt-sync')({ signit: true});
let flag = true;
let multiFlag = true;
var wins = 0;
var loss = 0;
var draw = 0;
var prompt1 = prompt('Rock, Paper, Scissors\nPress 1 for Solo Round or 2 for Best out of Three mode: ');

while (flag || multiFlag) {
    // game mode choice
    if (wins === 0 && loss === 0 && draw === 0) {
        prompt1;

        if (prompt1 == '1') {
            flag = true;
            multiFlag = false;
        } else {
            multiFlag = true;
            flag = false;
        }
    }

    let userInput = prompt('Rock, Paper, or Scissors? ');

    // random bot input function
    var arr = ['rock', 'paper', 'scissors'];
    var botInput = '';

    var bot = function () {
        botInput = arr[Math.floor(Math.random() * arr.length)];
    }

    bot();

    // winner function
    var winner = function () {
        if (userInput.toLowerCase() === 'rock' && botInput === 'scissors') {
            flag = false;
            console.log('You win! Rock beats scissors!');
            wins++;
        } else if (userInput.toLowerCase() === 'rock' && botInput === 'paper') {
            flag = false;
            console.log('Mr. Bot wins! Paper beats rock!');
            loss++;
        } else if (userInput.toLowerCase() === 'paper' && botInput === 'scissors') {
            flag = false;
            console.log('Mr. Bot wins! Scissors beats paper!');
            loss++;
        } else if (userInput.toLowerCase() === 'paper' && botInput === 'rock') {
            flag = false;
            console.log('You win! Paper beats rock!');
            wins++;
        } else if (userInput.toLowerCase() === 'scissors' && botInput === 'rock') {
            flag = false;
            console.log('Mr. Bot wins! Rock beats scissors!');
            loss++;
        } else if (userInput.toLowerCase() === 'scissors' && botInput === 'paper') {
            flag = false;
            console.log('You win! Scissors beats paper!');
            wins++;
        } else if (userInput.toLowerCase() === botInput) {
            console.log('Draw!');
            draw++;
        } else if (userInput.toLowerCase !== 'rock' || userInput.toLowerCase !== 'paper' || userInput.toLowerCase !== 'scissors') {
            console.log("That's not a choice, silly! Maybe there was a typo?");
        }
    }

    // play again function
    var playAgain = function () {
        var flag2 = true;
        while (flag2 || wins === 2 || loss === 2) {
            playAgainInput = prompt('Play again? ')
            if (playAgainInput.toLowerCase() === 'yes') {
                flag = true;
                multiFlag = true;
                flag2 = false;
                wins = 0;
                loss = 0;
                draw = 0;
                console.log('================NEW ROUND================');
            } else if (playAgainInput.toLowerCase() === 'no') {
                flag = false;
                flag2 = false;
                multiFlag = false;
                break;
            } else if (playAgainInput.toLowerCase() !== 'yes' || playAgainInput.toLowerCase() !== 'no') {
                flag2 = true;
                console.log('Check for typos and make sure you spell out the whole word!');
            }
        }
    }

    // output
    console.log('You chose: ' + userInput);
    console.log('Mr. Bot chose: ' + botInput);
    winner();
    console.log('Wins: ' + wins);
    console.log('Losses: ' + loss);
    console.log('Draws: ' + draw);
    if (prompt1 === '1' || wins === 2 || loss === 2) {
        playAgain();
    }
}