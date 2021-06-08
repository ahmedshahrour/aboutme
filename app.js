'use strict';

// let a = "Ola Altiti";
// const developer = 'none';
// console.log(developer);
// // let a = 'Laith';

// console.log(a);

// if(4 === 4){ console.log(true); }

// if(4 === 4){
//   console.log(true);
// }

// if(4===4)
// {
//   console.log(true);
// }

// if(cond) {
//   console.log();
// } else if () {

// } else {

// }

// And &&
// Or ||
// Not !
let answer =0

let userName = prompt('Please enter name!');
// userName = 'ahmed';
console.log(userName);

// alert('Welcome ' + userName + ' to our website');

alert(`my name is ${userName}, welcome to the website`);
console.log(`You name is ${userName}, welcome to the website`);

let student = prompt('Am i LTUC student ?').toLowerCase();

console.log(student);

answer++
// makeTrouble = makeTrouble.toLowerCase();

if (student === 'yes' || student === 'y') {
  alert('awesome');
} else if (student === 'no' || student === 'n') {
  alert('you should be');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}


let books = prompt(' Am i like reading books?').toLowerCase();

console.log(books);

answer++
// makeTrouble = makeTrouble.toLowerCase();

if (books === 'yes' || books === 'y') {
  alert('Excellent');
} else if (books === 'no' || books === 'n') {
  alert('you should be');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}

let engineer = prompt('Am i an engineer?').toLowerCase();

console.log(engineer);

answer++
// makeTrouble = makeTrouble.toLowerCase();

if (engineer === 'yes' || engineer === 'y') {
  alert('Great');
} else if (engineer === 'no' || engineer === 'n') {
  alert('you should be');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}

let developer = prompt('Am i a developer?').toLowerCase();

console.log(developer);

answer++
// makeTrouble = makeTrouble.toLowerCase();

if (developer === 'yes' || developer === 'y') {
  alert('Excellent');

} else if (developer === 'no' || developer === 'n') {
  //console.log('you should be');
  alert('you should be');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}

let weather = prompt('Am i like snow?').toLowerCase();

console.log(weather);

answer++
// makeTrouble = makeTrouble.toLowerCase();

if (weather === 'yes' || weather === 'y') {
  alert('Perfect');
} else if (weather === 'no' || weather === 'n') {
  alert('you should be');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}

alert(`Thank you ${userName}, for visiting the website`);
console.log(`Thank you ${userName}, for visiting the website`);




for (let i = 1; i <= 4; i++) {
  var counter = 50;

  var number = prompt('Guess my favorite number');

  if (number > 50) {
    alert('You guessed too high! Guess again');

  }

  else if (number < 50) {
    alert('You guessed too low! Guess again');


  }

  else {
    alert('That is correct! My favorite number is 50!');
    break;
  }

}
alert(`The favorite number is 50 !`);
answer++




let var2 = ['apple', 'orange', 'strawberry', 'blackberry', 'banana'];
for (let i = 1; i <= 7; i++) {


  var constant = prompt('Guess my favorite fruit');
  console.log("constant: ", constant);
  if (constant == 'apple' || constant == 'orange' || constant == 'strawberry' || constant == 'blackberry' || constant == 'banana') {
    alert('That is correct!');
    break;

  }

  else  {
    alert('You guessed wrong! Guess again');
    
  }


}
alert(`The favorite fruit are 'apple', 'orange', 'strawberry', 'blackberry', 'banana'`);

answer++
alert(answer);








//

// 
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