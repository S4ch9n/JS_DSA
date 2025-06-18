//we iterate over all the elements of  the array and check if it the current element is equal to the target element.If the target element is find then return the index of the current element.If not then return -1 , as the tagrget is not in array

function linearSearch(arr, n, target) {
  for (let i = 0; i < n; i++) {
    if (arr[i] == target) {
      return i; // Return index if target is found
    }
  }
  return -1; // Return -1 if target is not found
}

// Driver code
let arr = [2, 5, 6, 1, 4, 9, 3];
let n = arr.length;
let target = 6;

// Function call
let result = linearSearch(arr, n, target);

(result == -1) 
  ? console.log("Element is not present in the array") 
  : console.log("Element is present at index " + result);
