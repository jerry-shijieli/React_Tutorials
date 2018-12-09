// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // return getCleanSortedString(stringA) === getCleanSortedString(stringB);

  const charMapA = getCharMap(stringA);
  const charMapB = getCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
    return false;

  for (let c in charMapA) {
    if (charMapA[c] !== charMapB[c]) return false;
  }

  return true;
}

function getCharMap(string) {
  const input = string.replace(/[^\w]/g, "").toLowerCase();
  let result = {};

  for (let c of input) {
    result[c] = result[c] + 1 || 1;
  }

  return result;
}

function getCleanSortedString(input) {
  return input
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;
