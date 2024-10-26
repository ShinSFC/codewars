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

// Write a function to split a string and convert it into an array of words.

// function stringToArray(string){
//   return string.split(' ');
// }

// Capitalize every word in string

// String.prototype.toJadenCase = function (String) {
//   let arr =  this.split(' ');
//   return arr.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
// };

// Given a number and have to make it negative unless it is already negative.

// function makeNegative(num) {
//   return Math.sign(num) == -1 ? num : -num;
// }

// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// function pipeFix(numbers){
//   arr = [];
//   for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
//     arr.push(i)
//   }
//   return arr;
// }

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number

// var min = function(list){
//     list.sort((a, b) => a - b);
//     return list[0];
// }

// var max = function(list){
//     list.sort((a, b) => b - a);
//     return list[0];
// }

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.

// function stray(numbers) {
//   numbers.sort((a, b) => a - b);
//   if (numbers[numbers.length - 1] != numbers[numbers.length - 2]) {
//       return numbers.pop();
//     } else {
//       return numbers.shift();
//     }

// }

// You get an array of numbers, return the sum of all of the positives ones.

// function positiveSum(arr) {
//   let sum = 0;
//   for (num of arr) {
//     if (num > 0) sum += num;
//   }
//   return sum;
// }

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// function sortByLength (array) {
//     return array.sort((a, b) => a.length - b.length);
// }

// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

var capitals = function (word) {
  let result = []
  word.split('').reduce((acc, letter, idx) => {
    if (letter === letter.toUpperCase()) result.push(idx);
  }, []);
  return result;
}
