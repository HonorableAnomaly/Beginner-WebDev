// My attempt
// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   let w1 = {};
//   let w2 = {};
//   for (let letter of first) {
//     w1[letter] = (w1[letter] || 0) + 1;
//   }
//   for (let letter of second) {
//     w2[letter] = (w2[letter] || 0) + 1;
//   }

//   for (let key in w1) {
//     if (!(key ** 2 in w2)) {
//       return false;
//     }
//     if (w2[key ** 2] !== w1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// Correct solution
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
