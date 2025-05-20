function traversal(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = traversal(arr);
console.log(result); // Logs the array



//reverse traversal
function reverseTraversal(arr2){
  for(let i = arr.length - 1 ; i >= 0 ; i--){
    console.log(arr[i]);
  }
}
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result2 = reverseTraversal(arr2);
console.log(result2); // Logs the array
