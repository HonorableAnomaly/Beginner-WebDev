// My attempt
// function sameFrequency(numOne, numTwo) {
//   if (numOne.length !== numTwo.length) {
//     return false;
//   }

//   let freqOne = {};
//   let freqTwo = {};

//   for (let num of nums) {
//     freqOne[num] = (freqOne[num] || 0) + 1;
//   }
//   for (let num of nums) {
//     freqOne[num] = (freqOne[num] || 0) + 1;
//   }

//   for (let key in freqOne) {
//     if (!(key ** 2 in freqTwo)) {
//       return false;
//     }
//     if (freqTwo[key ** 2] !== freqOne[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// The solution
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

// Secondary solution ??
// Doesn't work without stringify

// function sameFrequency(num1, num2) {
//     if (num1.length !== num2.length) return false;

//     let countNum1 = {};
//     let countNum2 = {};

//     for (let i = 0; i < num1.length; i++) {
//       countNum1[num1[i]] = (countNum1[num1[i]] || 0) + 1;
//     }

//     for (let j = 0; j < num1.length; j++) {
//       countNum2[num2[j]] = (countNum2[num2[j]] || 0) + 1;
//     }

//     for (let key in countNum1) {
//       if (countNum1[key] !== countNum2[key]) return false;
//     }

//     return true;
//   }
