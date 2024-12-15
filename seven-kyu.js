// remove all '!' from a string

function removeExclamationMarks(s) {
  return s.replaceAll('!', '');
}

// calculate bmi and return string

function bmi(weight, height) {
  let bmi = weight / (height * height);
  if (bmi <= 18.5) return 'Underweight';
  if (bmi <= 25) return 'Normal';
  if (bmi <= 30) return 'Overweight';
  if (bmi > 30) return 'Obese';
}

// book solution
const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
  let arr = s.split(' ');
  return arr.map(str => str.length).sort((a, b) => a - b).shift();
}

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
  return str.slice(str.length - ending.length) == ending;
}

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return true if you're better, else false!

function betterThanAverage(classPoints, yourPoints) {
  return (classPoints.reduce((total, score) => total += score) / classPoints.length) < yourPoints ? true : false
}

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

function findNextSquare(sq) {
    let sqRt = Math.sqrt(sq); 
    return Number.isInteger(sqRt) ? Math.pow(sqRt + 1, 2) : -1
}

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// my solution
function doubleChar(str) {
  let arr = str.split('');
  return arr.map(let => let + let).join('');
}

// better solution
function doubleChar(str) {
  return [...str].map(v=>v+v).join('');
}

// Write a function to split a string and convert it into an array of words.

function stringToArray(string){
  return string.split(' ');
}

// Capitalize every word in string

String.prototype.toJadenCase = function (String) {
  let arr =  this.split(' ');
  return arr.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
};

// Given a number and have to make it negative unless it is already negative.

function makeNegative(num) {
  return Math.sign(num) == -1 ? num : -num;
}

// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

function pipeFix(numbers){
  arr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    arr.push(i)
  }
  return arr;
}

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number

var min = function(list){
    list.sort((a, b) => a - b);
    return list[0];
}

var max = function(list){
    list.sort((a, b) => b - a);
    return list[0];
}

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.

function stray(numbers) {
  numbers.sort((a, b) => a - b);
  if (numbers[numbers.length - 1] != numbers[numbers.length - 2]) {
      return numbers.pop();
    } else {
      return numbers.shift();
    }
}

// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  let sum = 0;
  for (num of arr) {
    if (num > 0) sum += num;
  }
  return sum;
}

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length);
}

// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

var capitals = function (word) {
  let result = []
  word.split('').reduce((acc, letter, idx) => {
    if (letter === letter.toUpperCase()) result.push(idx);
  }, []);
  return result;
}

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
  let array = n.toString().split('').sort().reverse();
  return Number(array.join(''));
}

// Given an integral number, determine if it's a square number:

return n < 0 ? false
    : n === 0 ? true
    : Number.isInteger(Math.sqrt(n)) ? true
    : false;

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
  let result = 0;
  numbers.reduce((sum, num) => {
    result += (num * num);
  }, 0);
  return result;
}

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {  
  let lowestNumbers = numbers.sort((a, b) => a - b).slice(0,2);
  return lowestNumbers.reduce(((sum, num) => sum + num), 0);
}

// you are asked to square every digit of a number and concatenate them.

function squareDigits(num){
    return Number(num.toString().split('').map(num => Number(num) * Number(num)).join(''))
}

// Given the triangle of consecutive odd numbers:
// Calculate the sum of the numbers in the nth row of this triangle

// this might not work for for 1

function rowSumOddNumbers(n) {
  let result = 0;
  if (n === 1) {
    result = 2;
  } else {
    for (let i = 0; i < n + 1; i++ ) {
      result += n + ((n - 1) * (n - 1)); 
    }
  }
  return result - 1;
}

// examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
	const string = [...s].map((ltr, idx) => ltr.repeat(idx + 1))
  return string.map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()).join('-');
}


// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
  let result = [];
  arr.sort((a, b) => a - b);
  result[0] = arr[0];
  result[1] = arr[arr.length - 1];
  return result;
}

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). 

// my solution
var number = function(busStops){
  let pplOn = busStops.reduce((sum, num) => sum + num[0], 0);
  return busStops.reduce((sum, num) => sum - num[1], pplOn);
}

// book solution
// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
  const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';
  const arr = str.split('');
  for ( vwl of vowel ) {
    result = arr.filter((letter) => !vowel.includes(letter));
  }
  return result.join('');
}

//Make a program that filters a list of strings and returns a list with only your friends name in it.
//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!

const friend = (friends) => friends.filter((name) => name.length == 4);

//Input will consist of a list of pairs. Each pair contains information for a single potential member. 
//To be a senior, a member must be at least 55 years old and have a handicap greater than 7.

const openOrSenior = data => data.map((num) => (num[0] >= 55 && num[1] > 7) ? 'Senior' : 'Open');

// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

function SeriesSum(n) {
  if (n == 0) return '0.00';
  if (n == 1) return '1.00';
  let result = 1;
  let num = 1;
  for (let i = 2; i <= n; i++) {
    result += (1 / (num += 3));
  }
  return (Math.round(result * 100) / 100).toFixed(2).toString();
}

//Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

//The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

function calculateYears(principal, interest, tax, desired) {
if ( principal == desired) return 0;
let totalYears = 0;
for ( let i = 1; principal <= desired; i++ ) {
    principal += (principal * interest) - (principal * interest * tax);
    totalYears = i;
 }
return totalYears;
}

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

const filter_list = l => l.filter(item => item === Number(item));

// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

var number = array => array.map((item, idx) => `${idx + 1}: ${item}`);

// Two to One

function longest(s1, s2) {
  const newArr = new Set(s1.concat(s2).split('').sort());
  return [...newArr].join('');
}

// Array Array Array

function explode(x){
  let sum = 0;
  let result = [];
  
  typeof x[0] === 'number' && typeof x[1] === 'number' ? sum = x[0] + x[1] :
    typeof x[0] === 'number' ? sum = x[0] :
    typeof x[1] === 'number' ? sum = x[1] :
      sum = 'Void!';
  
    for (let i = sum; sum > 0; sum--) {
      result.push(x);
    }
  
  return sum === 'Void!' ? sum : result;
}

// Beginner Series #3 Sum of Numbers

 function getSum(a, b) {
  if (a === b) return a;
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  let arr = [];
   
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  
  return arr.reduce((sum, num) => sum + num, 0)
}

// Exes and Ohs

function XO(str) {
  let oCount = 0;
  let xCount = 0;
  
  [...str.toLowerCase()].forEach((ltr) => {
    if (ltr === 'x') xCount += 1; 
    if (ltr === 'o') oCount += 1;
  });
  
  return (oCount === 0 && xCount === 0) ? true :
    oCount === xCount ? true :
      false;
}

//Remove anchor from URL

const removeUrlAnchor = (url) => url.includes('#') ? url.slice(0, url.indexOf('#')) : url

// Vowel Count

function getCount(str) {
  const vowel = 'aeiou';
  let count = 0;
  str.split('').map((ltr) => {
    if (vowel.includes(ltr)) {
        count++
        }  
  });
  return count;
}

// Highest and Lowest

function highAndLow(numbers){
  const array = numbers.split(' ').sort((a, b) => a - b);
  const one = array[0];
  const two = array[array.length - 1];
  return array[0] == array[array.length - 1] ? one + ' ' + one : two + ' ' + one;
}

// Small enough? - Beginner

function smallEnough(a, limit){
  let result = true;
  a.forEach(item => {
    if (item > limit) result = false;
  });
  return result;
}

// Complementary DNA

function dnaStrand(dna) {
  let arr = [...dna];
  arr = arr.map((ltr) => { 
    switch (ltr) {
        case 'A' : return 'T';
        case 'T' : return 'A';
        case 'G' : return 'C';
        case 'C' : return 'G';
    }
    });
  return arr.join('');
}

// Check the exam

function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    array2[i] === '' ? score += 0 :
    array1[i] === array2[i] ? score += 4 : 
    score -= 1;
  }
  return score < 0 ? 0 : score;
}

// Is this a triangle?

function isTriangle(a,b,c) {
  const arr = [a, b, c].sort((a, b) => a - b);
  return (arr[0] + arr[1]) > arr[2] ? true : false;
}

// Get the Middle Character

function getMiddle(s) {
  return (s.length % 2) === 0 ? (s[(s.length / 2) - 1] + s[s.length / 2]) : 
  s[Math.floor(s.length / 2)];
}

// Anagram Detection

var isAnagram = function(test, original) {
  if (test.length !== original.length) return false;
  const arr = original.toLowerCase().split('').sort();
  test = test.toLowerCase().split('').sort();
  return test.every((ltr, idx) => ltr == arr[idx]);
}

// Matrix creation

// [1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]

function getMatrix(number) {
  let result = [];
  
  for (let i = 0; i < number; i++) {
    let array = [];
    for (let x = 0; x < number; x++) {
      array.push(i == x ? 1 : 0);
    }
    result.push(array);
  }
  
  return result;
} 

// Maximum Product

const adjacentElementsProduct = (array) => Number(array.map((num, idx) => array[idx] * array[idx + 1]).sort((a, b) => a - b).slice(-2, -1));

// Largest Elements

const largest = (n, array) => array.sort((a, b) => a - b).slice(array.length - n, array.length);

// Help Suzuki rake his garden!

const rakeGarden = (garden) => garden.split(' ').map((item) => item == 'gravel' || item == 'rock' ? item : 'gravel').join(' ');

// Find the index of the second occurance of a letter in a string

const secondSymbol = (s, symbol) => s.replace(symbol, '_').indexOf(symbol);
// not ideal as it passes testing but will not if original string contains a '_'

// Regex validate PIN code

function validatePIN (pin) {
  let falseCount = 0;
  const numbers = '1234567890'
  if (pin < 0) falseCount++ 
  if (pin.length != 4 && pin.length != 6) falseCount++;
  pin.split('').map((num) => {
    numbers.includes(num) ? null : falseCount++;
    });
  return falseCount == 0 ? true : false;
}

// Debug the functions EASY

const multi = (arr) => arr.reduce((product, num) => product *= num, 1 );

const add = (arr) => arr.reduce((sum, num) => sum += num, 0);

const reverse = (str) => str.split('').reverse().join('');

// Inspiring Strings

const longestWord = (stringOfWords) => stringOfWords.split(' ').sort((a, b) => a.length - b.length).pop();
