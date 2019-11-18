// Create a function that accepts 2 arrays as arguments
    
    // Create a new array to store the unique items
    
    // Loop through items in second array
        // Check if current item exists in first array
        // If no, add it to the new, unique array
        // Otherwise do nothing
        
    // Loop through the items in the first array
        // Check if the current item exists in the second array
        // If no, add it to the new, unique array
        // // Otherwise do nothing
        
    // Return the new array

// Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Note
// You can return the array with its elements in any order.
let newArr = [];
function diffArray(arr1, arr2) {
    
    // loop through arr2
    for (let i in arr2) {
            //if current item does not exist in arr1
            if (arr1.indexOf(arr2[i]) === -1) {
                //add it to newArr 
                newArr.push(arr2[i]);
            }
        }

        for (let i in arr1) {
            //if current item does not exist in arr2
            if (arr2.indexOf(arr1[i]) === -1) {
                //add it to newArr
                newArr.push(arr1[i]);
            }
        }
        return newArr;
        
    }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);