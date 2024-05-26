/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (this.root === null) {
      return 0;
    }

    let toVisitQueue = [[this.root, 1]];

    while (toVisitQueue.length) {
      let [current, depth] = toVisitQueue.shift();

      // Check if current node is a leaf
      if (!current.left && !current.right) {
        return depth;
      }

      // Add children to the queue with updated depth
      if (current.left) {
        toVisitQueue.push([current.left, depth + 1]);
      }
      if (current.right) {
        toVisitQueue.push([current.right, depth + 1]);
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (this.root === null) {
      return 0;
    }

    let toVisitQueue = [[this.root, 1]];
    let maxDepth = 0;

    while (toVisitQueue.length) {
      let [current, depth] = toVisitQueue.shift();

      // update depth
      if (depth > maxDepth) {
        maxDepth = depth;
      }

      // Add children to the queue with updated depth
      if (current.left) {
        toVisitQueue.push([current.left, depth + 1]);
      }
      if (current.right) {
        toVisitQueue.push([current.right, depth + 1]);
      }
    }

    return maxDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (this.root === null) {
      return 0;
    }
    /**
    The purpose of initializing maxSum to -Infinity is to ensure that any sum encountered during the traversal of the tree will be larger than this initial value.
    This approach guarantees that even if all the values in the tree are negative, the algorithm will correctly identify the highest (least negative) sum. 
    Using -Infinity ensures that any real number (including negative numbers) encountered during the traversal will be greater than maxSum
    */
    let maxSum = -Infinity;
    // simulate the depth-first search traversal
    let stack = [];
    // store the maximum path sum calculated for each node
    let nodeMap = new Map();

    stack.push(this.root);

    while (stack.length > 0) {
      let node = stack[stack.length - 1];

      // checks if the current node has already been processed
      if (nodeMap.has(node)) {
        stack.pop();
        // retrieve the maximum path sums for the left and right subtrees of the current node. Or return 0 if child does not exist(null)
        let leftMax = Math.max(nodeMap.get(node.left) || 0, 0);
        let rightMax = Math.max(nodeMap.get(node.right) || 0, 0);

        // For each node, the maximum path sum including the current node and its left and right subtrees is calculated.
        let currentMax = node.val + leftMax + rightMax;
        maxSum = Math.max(maxSum, currentMax);

        // Nodes are pushed onto the stack until all nodes are visited. The map keeps track of nodes that have been fully processed.
        nodeMap.set(node, node.val + Math.max(leftMax, rightMax));
      } else {
        nodeMap.set(node, null);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
      }
    }

    return maxSum;
  }

  sumEverything() {
    if (this.root === null) {
      return 0;
    }

    let toVisitQueue = [this.root];
    let maxSum = 0;

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      // update max
      maxSum += current.val;

      // Add children to the queue with updated depth
      if (current.left) {
        toVisitQueue.push(current.left);
      }
      if (current.right) {
        toVisitQueue.push(current.right);
      }
    }

    return maxSum;
  }

  maxSumPerDepth() {
    if (this.root === null) {
      return 0;
    }

    let toVisitQueue = [[this.root, this.root.val]];
    let maxSum = 0;

    while (toVisitQueue.length) {
      let [current, depth] = toVisitQueue.shift();

      // update depth
      if (depth > maxSum) {
        maxSum = depth;
      }

      // Add children to the queue with updated depth
      if (current.left) {
        toVisitQueue.push([current.left, depth + current.left.val]);
      }
      if (current.right) {
        toVisitQueue.push([current.right, depth + current.left.val]);
      }
    }

    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root === null) {
      return null;
    }

    let toVisitQueue = [this.root];
    let lowest = null;

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      // update lowest
      if (
        current.val > lowerBound &&
        (lowest === null || current.val < lowest)
      ) {
        lowest = current.val;
      }

      // Add children to the queue with updated depth
      if (current.left) {
        toVisitQueue.push(current.left);
      }
      if (current.right) {
        toVisitQueue.push(current.right);
      }
    }

    return lowest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
