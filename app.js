'use strict';

let score =0;
let favoriteNmber = 50;
let tries = 0;
let userName = prompt('Please enter name!');
alert(`Hello  ${userName}, welcome to my website`);
// console.log(`You name is ${userName}, welcome to the website`);
alert('i am going to ask you some question \r\n Pease type (yes) or (no) or (y) or (n)');
const questionsArray = ['Am i LTUC student ?',
  'Am i like reading books?',
  'Am i an engineer?',
  'Am i a developer?',
  'do i like snow ?'];
let correctAnswer = [1,1,1,0,1];
let validinputs = ['yes','no','y','n'];
let answer ;
for (const i of questionsArray) {
  fiveQuestions(i,correctAnswer[questionsArray.indexOf(i)]);
}
//4 tries  ;
for (let i = 0 ; i < 4 ; i++) {
  answer = guessFavoriteNumber();
  if ( answer < favoriteNmber ){
    alert(`its more than what you entered ,\r\n you have ${3-i} tries left `);
  }else if ( answer > favoriteNmber ){alert(`its less than what you entered ,\r\n you have ${3-i} tries left `);
  }else if ( answer === favoriteNmber ){
    alert('Wow,thats Correct');
    score = score + 1 ;
    guessMyfavoriteFruit();
    break; }
}

function fiveQuestions(question,correctAnswer){
  do {
    answer = prompt(question).toLowerCase();
    if ((correctAnswer === 1 ) && (answer ==='y' || answer === 'yes')){
      alert('thats a right answer');
      score = score + 1;
    }else if ((correctAnswer === 0 ) && (answer ==='n' || answer === 'no')){
      alert('thats a right answer');
      score = score + 1;
      //console.log(`visitor ${visitorName} Answerd ${i} correctly `);
    }else if (!(validinputs.indexOf(answer) === -1)) {alert('thats a Wrong answer');}
  }while (validinputs.indexOf(answer) === -1);
}
function guessFavoriteNumber()
{
  do
  {
    //accept the answer only when its a numeric answer , by converting the string to an integer
    answer = prompt('Guess my favorite number ? Enter numbers only');
    answer = parseInt(answer);
  }while ( isNaN(answer));
  return answer;
}
function guessMyfavoriteFruit(){
  let possibleCorrectAnsweres = ['apple', 'orange', 'strawberry', 'blackberry', 'banana','melon'];
  let flag = false;
  do{
    //get the user input and search it on the array , if exists the score +1 and pingo , break the for loop , breack the while ;
    answer = prompt(`Guess one of my favorite fruit' ,\r\n
    | apple orange strawberry blackberry banana melon  \r\n`).toLowerCase();

    for (let i = 0; i < 6 ; i++) {
      if (answer === possibleCorrectAnsweres[i]) {
        score = score + 1 ;
        flag= true;
        break;
      }
    }
    if (flag) {break;}
    tries++;
  }while( (tries < 6) );

}

alert(`You scored ${score} out of 7` );
alert(`thank you alot for your time ${userName} check out my bio`);

// let student = prompt('Am i LTUC student ?').toLowerCase();
// // console.log(student);
// if (student === 'yes' || student === 'y') {
//   alert('awesome');
//   score = score + 1 ;
// } else if (student === 'no' || student === 'n') {
//   alert('you should be');
// } else {
//   alert('Pease type (yes) or (no) or (y) or (n)');
// }


// let books = prompt(' ').toLowerCase();

// console.log(books);

// answer++;
// // makeTrouble = makeTrouble.toLowerCase();

// if (books === 'yes' || books === 'y') {
//   alert('Excellent');
// } else if (books === 'no' || books === 'n') {
//   alert('you should be');
// } else {
//   alert('Pease type (yes) or (no) or (y) or (n)');
// }

// let engineer = prompt('Am i an engineer?').toLowerCase();

// console.log(engineer);

// answer++;
// // makeTrouble = makeTrouble.toLowerCase();

// if (engineer === 'yes' || engineer === 'y') {
//   alert('Great');
// } else if (engineer === 'no' || engineer === 'n') {
//   alert('you should be');
// } else {
//   alert('Pease type (yes) or (no) or (y) or (n)');
// }

// let developer = prompt('Am i a developer?').toLowerCase();

// console.log(developer);

// answer++;
// // makeTrouble = makeTrouble.toLowerCase();

// if (developer === 'yes' || developer === 'y') {
//   alert('Excellent');

// } else if (developer === 'no' || developer === 'n') {
//   //console.log('you should be');
//   alert('you should be');
// } else {
//   alert('Pease type (yes) or (no) or (y) or (n)');
// }

// let weather = prompt('Am i like snow?').toLowerCase();

// console.log(weather);

// answer++;
// // makeTrouble = makeTrouble.toLowerCase();

// if (weather === 'yes' || weather === 'y') {
//   alert('Perfect');
// } else if (weather === 'no' || weather === 'n') {
//   alert('you should be');
// } else {
//   alert('Pease type (yes) or (no) or (y) or (n)');
// }

// alert(`Thank you ${userName}, for visiting the website`);
// console.log(`Thank you ${userName}, for visiting the website`);




// for (let i = 1; i <= 4; i++) {
//   var counter = 50;

//   var number = prompt('Guess my favorite number');

//   if (number > 50) {
//     alert('You guessed too high! Guess again');

//   }

//   else if (number < 50) {
//     alert('You guessed too low! Guess again');


//   }

//   else {
//     alert('That is correct! My favorite number is 50!');
//     break;
//   }

// }
// alert('The favorite number is 50 !');
// answer++;




// let var2 = ['apple', 'orange', 'strawberry', 'blackberry', 'banana'];
// for (let i = 1; i <= 7; i++) {


//   var constant = prompt('Guess my favorite fruit');
//   console.log('constant: ', constant);
//   if (constant == 'apple' || constant == 'orange' || constant == 'strawberry' || constant == 'blackberry' || constant == 'banana') {
//     alert('That is correct!');
//     break;

//   }

//   else {
//     alert('You guessed wrong! Guess again');

//   }


// }
// alert('The favorite fruit are \'apple\', \'orange\', \'strawberry\', \'blackberry\', \'banana\'');

// answer++;
// alert(answer);








// //

// //
// console.log('Mohammed '.length);
// i++
// i = i + 2



// for(let i = 0; i < studentName.length; i++) {
//   console.log(studentName[i]);
// }

// let makeTrouble = prompt('Are you a trouble maker?').toLowerCase();

// while(makeTrouble !== 'no' && makeTrouble !== 'n' && makeTrouble !== 'yes' && makeTrouble !== 'y') {
//   makeTrouble = prompt('Are you a trouble maker? please enter yes, no, n, y!').toLowerCase();
// }

// if(makeTrouble === 'yes' || makeTrouble === 'y') {
//   alert('Calm down ');
// } else {
//   alert('Good job');
// }

// let question;
// do {
//   question = prompt('are you human?');
// } while(question !== 'yes' && question !== 'y' && question !== 'no' && question !== 'n');
