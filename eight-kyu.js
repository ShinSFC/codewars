
// sum of array elements and treat stings as numbers

// arr = [9, 3, '7', '3'];

// function sumMix(x) {
//     let result = 0;
//     x.reduce((sum, num) => {
//         return result += Number(num);
//     }, 0);
//     return result;
// }

// console.log(sumMix(arr));


// repeat string x times
// my solution
// function repeatStr(n, s) {
//     let str = '';
//     for (let i = 0; i < n; i++) {
//         str += s;
//     }
//     return str;
// }

// console.log(repeatStr(3, 'n'));


// book solution
// function repeatStr (n, s) {
//   return s.repeat(n);
// }

// remove all spaces in string
// function noSpace(x) {
//   return x.replaceAll(' ', '');
// }

// return a string 'num sheep...' * num

// var countSheep = function (num){
//   let str = '';
//   for (let i = 1; i <= num; i++) {
//      str += `${i} sheep...` 
//   }
//   return str;
// }