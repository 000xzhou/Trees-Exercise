/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  count() {
    let toVisitQueue = [this];
    let count = 0;

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current.val % 2 === 0) {
        count += 1;
      }

      for (let child of current.children) toVisitQueue.push(child);
    }

    return count;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // check if empty
    if (this.root === null) {
      return 0;
    }

    let sum = 0;
    let toVisitQueue = [this.root];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      if (current.val) {
        sum += current.val;
      }
      for (let child of current.children) toVisitQueue.push(child);
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // checks if empty [null]
    if (this.root === null) {
      return 0;
    }
    return this.root.count();
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    // checks if empty [null]
    if (this.root === null) {
      return 0;
    }

    let toVisitQueue = [this.root];
    let count = 0;

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current.val > lowerBound) {
        count += 1;
      }

      for (let child of current.children) toVisitQueue.push(child);
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };
