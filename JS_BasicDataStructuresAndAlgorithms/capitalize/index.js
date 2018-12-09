// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let firstLetter = str[0].toUpperCase();

  let result = str
    .split("")
    .map((c, i) => {
      if (i !== 0 && str[i - 1] === " ") {
        return c.toUpperCase();
      } else {
        return c;
      }
    })
    .reduce((res, c) => res + c, "");

  return firstLetter + result.slice(1);

  // let words = [];
  //
  // for (let word of str.split(" ")) {
  //   if (word.length > 0) {
  //     let newWord = word[0].toUpperCase() + word.slice(1);
  //     words.push(newWord);
  //   }
  // }
  //
  // return words.join(" ");
}

module.exports = capitalize;
