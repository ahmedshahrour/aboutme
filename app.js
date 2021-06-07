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

let userName = prompt('Please enter name!');
// userName = 'ahmed';
console.log(userName);

// alert('Welcome ' + userName + ' to our website');

alert(`my name is ${userName}, welcome to the website`);
console.log(`You name is ${userName}, welcome to the website`);

let student = prompt('Am i LTUC student ?').toLowerCase();

console.log(student);

// makeTrouble = makeTrouble.toLowerCase();

if(student === 'yes' || student === 'y') {
  alert('awesome');
} else if (student === 'no' || student === 'n') {
  alert('you should be');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}


let books = prompt(' Am i like reading books?').toLowerCase();

console.log(books);

// makeTrouble = makeTrouble.toLowerCase();

if(books === 'yes' || books === 'y') {
  alert('Excellent');
} else if (books === 'no' || books === 'n') {
  alert('you should be');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}

let engineer = prompt('Am i an engineer?').toLowerCase();

console.log(engineer);

// makeTrouble = makeTrouble.toLowerCase();

if(engineer === 'yes' || engineer === 'y') {
  alert('Great');
} else if (engineer === 'no' || engineer === 'n') {
  alert('you should be');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}

let developer = prompt('Am i a developer?').toLowerCase();

console.log(developer);

// makeTrouble = makeTrouble.toLowerCase();

if(developer === 'yes' || developer === 'y') {
  alert('Excellent');
 
} else if (developer === 'no' || developer === 'n') {
   //console.log('you should be');
  alert('you should be');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}

let weather = prompt('Am i like snow?').toLowerCase();

console.log(weather);

// makeTrouble = makeTrouble.toLowerCase();

if(weather === 'yes' || weather === 'y') {
  alert('Perfect');
} else if (weather === 'no' || weather === 'n') {
  alert('you should be');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}

alert(`Thank you ${userName}, for visiting the website`);
console.log(`Thank you ${userName}, for visiting the website`);