// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let curLevel = [root];
  let nextLevel = [];
  const counters = [0];

  while (curLevel.length > 0) {
    const node = curLevel.shift();

    nextLevel.push(...node.children);
    counters[counters.length - 1]++;

    if (curLevel.length === 0 && nextLevel.length > 0) {
      counters.push(0);
      curLevel = nextLevel;
      nextLevel = [];
    }
  }

  return counters;
}

module.exports = levelWidth;
