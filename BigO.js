//     9
//  4     20
//1  6  15   170


class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  // Helper function to print the tree
  printTree(node = this.root, level = 0, prefix = "Root: ") {
    if (node !== null) {
      console.log(" ".repeat(level * 4) + prefix + node.value);
      if (node.left !== null || node.right !== null) {
        this.printTree(node.left, level + 1, "L: ");
        this.printTree(node.right, level + 1, "R: ");
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(20);
tree.insert(4);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
tree.insert(100);
tree.insert(55);
tree.insert(7);
tree.insert(2);

tree.printTree();

