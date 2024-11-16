// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0]
}

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not.

function isPangram(string){
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let resultTrue = 0;
  let resultFalse = 0;
  for (let i = 0; i < 26; i++) {
    string.toLowerCase().includes(alphabet[i]) ? resultTrue++ : resultFalse++;
  }
  return resultFalse === 0 ? true : false;
}

// Implement the function which takes an array containing the names of people that like an item.

function likes(names) {
  let result = '';
  if (names.length == 0) {
    result = 'no one likes this';
  } else if (names.length == 1) {
     result = names[0] + ' likes this'; 
  } else if (names.length == 2) {
    result = `${names[0]} and ${names[1]} like this`
  } else if (names.length == 3) {
    result = `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    result = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
  return result;   
}

// Playing with digits

function digPow(n, p){
  let num = 0;
  const arr = n.toString().split(''); 
  let ex = p;
  for (let i = 0; i < n.toString().length; i++) {
    num += Math.pow(arr[i], ex);
    ex++;
  }
  return num % n === 0 ? num / n : -1;
}

// Persistent Bugger

function persistence(num) {
  if (String(num).length == 1) return 0;
  let result = String(num).split('').reduce((result, digit) => result * digit, 1);
  let counter = 1;
  while (result.toString().length != 1) {
    result = String(result).split('').reduce((result, digit) => result * digit, 1);
    counter++;
    }
  return counter;
}