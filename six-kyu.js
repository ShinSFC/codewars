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
