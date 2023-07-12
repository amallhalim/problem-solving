// problem is ==>> Given the string, check if it is a palindrome.
function solution(inputString) {
  let check = 0;
  let wordLength = inputString.length;
  //first case even word
  if (wordLength % 2 == 0) {
    for (let i = 0; i < wordLength; i++) {
      if (inputString[i] === inputString[wordLength - 1 - i]) {
        check += 1;
      }
    }
  } else {
    //first case odd word
    for (let i = 0; i < wordLength; i++) {
      console.log("for", i);
      if (inputString[i] === inputString[wordLength - 1 - i]) {
        if (i == wordLength + 1 / 2) {
          continue;
        }
        check += 1;
      }
    }
  }

  if (check == inputString.length) {
    console.log("true");
  } else {
    console.log("false");
  }
  return inputString;
}

console.log(solution("layyal"));
console.log("##########");
console.log(solution("layal"));
console.log("##########");
console.log(solution("laya0l"));
console.log("##########");

// function sum(firsNum, SecNum) {
//   return firsNum + SecNum;
// }
// console.log(sum(1, 5));
// console.log(sum("amal", "halim"));
