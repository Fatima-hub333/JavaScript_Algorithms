// Binary TREE PREORDER IN ITERATIVE WAY
var preorderTraversal = function (root) {
  if (!root) return [];
  const stack = [root];
  const result = [];

  while (stack.length) {
    let node = stack.pop();

    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
}

// Binary TREE PREORDER IN RECURSIVE WAY
var preorderTraversal(root) {
  if (!root) return [];
  const result = [];

  const preorder = (node) => {
    if (!node) return null;

    result.push(node.val);
    if (node.left) preorder(node.left);
    if (node.right) preorder(node.right);
  }

  preorder(root);
  return result;
}

//INORDER BINARY TREE RECURSIVE SOLUTION

//left, node, right
// 1. Create results Array
// 2. Create traverse function
//     a. if node is null, return
//     b. if node.left exists, call traverse(node.left)
//     c. Push node.val into results
//     d. if node.right exists, call traverse (node.right)
// 3. call traverse function;
// 4. Return results

var inorderTraversal = function (root) {
  let results = [];
  const traverse = (node) => {
    if (node === null) return;
    if (node.left) traverse(node.left);
    results.push(node.val);
    if (node.right) traverse(node.right);
  }

  traverse(root);
  return results;
}

var inorderTraversal = function (root) {
  let results = [];
  const traverse = (node) => {
    if (node === null) return;
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    results.push(node.val);
  }

  traverse(root);
  return results;
}