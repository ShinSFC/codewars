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

// function findShort(s){
//   let arr = s.split(' ');
//   return arr.map(str => str.length).sort((a, b) => a - b).shift();
// }

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// function solution(str, ending){
//   return str.slice(str.length - ending.length) == ending;
// }

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return true if you're better, else false!

// function betterThanAverage(classPoints, yourPoints) {
//   return (classPoints.reduce((total, score) => total += score) / classPoints.length) < yourPoints ? true : false
// }

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

// function findNextSquare(sq) {
//     let sqRt = Math.sqrt(sq); 
//     return Number.isInteger(sqRt) ? Math.pow(sqRt + 1, 2) : -1
// }

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// my solution
// function doubleChar(str) {
//   let arr = str.split('');
//   return arr.map(let => let + let).join('');
// }

// better solution
// function doubleChar(str) {
//   return [...str].map(v=>v+v).join('');
// }