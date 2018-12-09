// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const hash = {};
  let maxChar = "";
  let maxCount = 0;

  for (let c of str) {
    hash[c] = hash[c] + 1 || 1;
  }

  for (let c in hash) {
    if (hash[c] > maxCount) {
      maxCount = hash[c];
      maxChar = c;
    }
  }

  return maxChar;
}

module.exports = maxChar;
