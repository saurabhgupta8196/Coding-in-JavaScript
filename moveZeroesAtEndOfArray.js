/**
Move all zeroes to end of array

Given an array of random numbers, Push all the zero’s of a given array to 
the end of the array. For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, 
it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. The order of all other elements 
should be same. Expected time complexity is O(n) and extra space is O(1).

Example:

Input :  arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};

Input : arr[]  = {1, 2, 0, 0, 0, 3, 6};
Output : arr[] = {1, 2, 3, 6, 0, 0, 0}; */

function moveZeroesAtEndOfArray(array){
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index] !== 0){
            array[count] = array[index];
            count += 1;
        }    
    }
    while(count<array.length){
        array[count] = 0;
        count += 1;
    }
 return array;
}
let arr = [1,2,3,0,5,0,3,0,6,0,0,0,2,4,5]
console.log(moveZeroesAtEndOfArray(arr));
arr = [1, 2, 0, 4, 3, 0, 5, 0];
console.log(moveZeroesAtEndOfArray(arr));
arr = [1, 2, 0, 0, 0, 3, 6]
console.log(moveZeroesAtEndOfArray(arr));
