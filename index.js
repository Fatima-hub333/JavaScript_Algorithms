function factorialize(number1){
    let count = number1;
    if(count===0){
        return 1;
    }
    else{
        for(var i=1;i<count;i++){
            number1=number1*i;
        }
        return number1;
    }
}
factorialize(5);

// Find longest word in a string
function findLongestWord(stringVal) {
  let arrayOfStrings = stringVal.split(" ");
  let longestString = '';

  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (longestString.length < arrayOfStrings[i].length) {
      longestString = arrayOfStrings[i];
    }
  }
  console.log(longestString)
}

findLongestWord('The Force is strong in this one');


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