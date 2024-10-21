
// sum of array elements and treat stings as numbers

// arr = [9, 3, '7', '3'];

function sumMix(x) {
    let result = 0;
    x.reduce((sum, num) => {
        return result += Number(num);
    }, 0);
    return result;
}

// console.log(sumMix(arr));


// repeat string x times
// my solution
function repeatStr(n, s) {
    let str = '';
    for (let i = 0; i < n; i++) {
        str += s;
    }
    return str;
}

// console.log(repeatStr(3, 'n'));


// book solution
function repeatStr (n, s) {
  return s.repeat(n);
}

// remove all spaces in string
// function noSpace(x) {
//   return x.replaceAll(' ', '');
// }

// return a string 'num sheep...' * num

var countSheep = function (num){
  let str = '';
  for (let i = 1; i <= num; i++) {
     str += `${i} sheep...` 
  }
  return str;
}

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
  let result = 0;
  for (let i = 1; i < num + 1; i++) {       // instead of + 1, should have used <=
    result += i;
  }
  return result;
}

//Determine winner in rock, paper, scissors

const rps = (p1, p2) => {
  if (p1 == p2) return 'Draw!';
  if (p1 == 'rock' && p2 == 'paper') return 'Player 2 won!';
  if (p1 == 'rock' && p2 == 'scissors') return 'Player 1 won!';
  if (p1 == 'paper' && p2 == 'rock') return 'Player 1 won!';
  if (p1 == 'paper' && p2 == 'scissors') return 'Player 2 won!';
  if (p1 == 'scissors' && p2 == 'rock') return 'Player 2 won!';
  if (p1 == 'scissors' && p2 == 'paper') return 'Player 1 won!';
}

// find third angle of a triangle if given two angles

function otherAngle(a, b) {
  return 180 - a - b;
}
