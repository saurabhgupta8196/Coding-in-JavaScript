/**Square root of a number without using sqrt() function
Given a number N, the task is to find the square root of N without using sqrt() function.

Examples:

Input: N = 25
Output: 5

Input: N = 3
Output: 1

Input: N = 5
Output: 2 */

// Using Binary Search technique to find in O(log n)
var t1 = performance.now();
var sqrtOfNumberMethod1 = (number) => {
    let low=1, high=number;
    let mid;
    while(low<=high){
        mid = parseInt((low+high)/2);
        if(mid*mid === number)
            return mid;
        else if(mid*mid > number)
            high = mid-1;
        else
            low = mid+1;
    }
    return low-1;
}
var t2 = performance.now();
console.log("Sqrt = "+sqrtOfNumberMethod1(100010));
console.log("Its Performance "+(t2-t1));

//Another way with complexity as O(n^1/2)
t1 = performance.now();
var sqrtOfNumberMethod2 = (number) => {
    let sqrt;
    for (let index = 1; index*index <= number; index++) {
        sqrt = index;
    }
    return sqrt;
}
t2 = performance.now();
console.log("Sqrt = "+sqrtOfNumberMethod2(100010));
console.log("Its Performance "+(t2-t1));