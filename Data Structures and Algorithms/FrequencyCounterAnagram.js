function validAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  let w1 = {};
  let w2 = {};
  for (let letter of word1) {
    w1[letter] = (w1[letter] || 0) + 1;
  }
  for (let letter of word2) {
    w2[letter] = (w2[letter] || 0) + 1;
  }

  for (let key in w1) {
    if (!(key ** 2 in w2)) {
      return false;
    }
    if (w2[key ** 2] !== w1[key]) {
      return false;
    }
  }
  return true;
}
