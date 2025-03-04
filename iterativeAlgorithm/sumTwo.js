//Write a Program to find two array elements in an array that add up to a number
function addTwo(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null; // Move the null return outside the loops
}

let arr = [1, 0, 7, 5, 9];
let target = 10;
let result = addTwo(arr, target);
console.log(result);
