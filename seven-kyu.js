// remove all '!' from a string

// function removeExclamationMarks(s) {
//   return s.replaceAll('!', '');
// }

// calculate bmi and return string

// function bmi(weight, height) {
//   let bmi = weight / (height * height);
//   if (bmi <= 18.5) return 'Underweight';
//   if (bmi <= 25) return 'Normal';
//   if (bmi <= 30) return 'Overweight';
//   if (bmi > 30) return 'Obese';
// }

// book solution
// const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
//                                     bmi <= 25 ? "Normal" :
//                                     bmi <= 30 ? "Overweight" : "Obese";

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
  let arr = s.split(' ');
  return arr.map(str => str.length).sort((a, b) => a - b).shift();
}


