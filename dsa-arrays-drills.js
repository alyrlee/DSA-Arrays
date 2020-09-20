/*============
5. URLify a string
A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

Input: Ashley Lee

Output: Ashley%20Lee

Input: www.thinkful.com /ash ley lee

Output: www.thinkful.com%20/ash%20ley%20lee
============*/

'use strict';

function urlifyString(string) {
  string = string.trim();
  let output = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      output += '%20';
    } else {
      output += string[i];
    }
  }
  return output;
}

console.log(urlifyString('Ashley Lee'));

// complexity: O (n)

/*============

6. Filtering an array
Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. 
DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.
============*/

function filter(array) {
for (let i = 0; i< arr.length; i++) { //complexity: O(n)
    if (arr[i] >= 5) {
      newArr.push(arr[i]); //O(1)
    }
  }
  return newArr;
} 

/*============

7. Max sum in the array
You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

Input: [4, 6, -3, 5, -2, 1]
Output: 12
============*/
function maxSum(arr){
  let sum =0;

  for (let i = 0; i < arr.length; i++) {
    let total = arr[i];
    for(let j = i + 1; j < arr.length; j++) {
      total += arr[j];

      if (total > sum) {
        sum = total;
      }
    }
  }
  return sum;
}

//console.log(maxSum([4, 6, -3, 5, -2, 1]));

//complexity:O(n^2)

/*============
8. Merge arrays
Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
============*/

function mergeArrays(array1,array2){

let result = [...array1, ...array2];
  return result.sort((a,b) => a-b);
}
//console.log([1, 3, 6, 8, 11]),([2, 3, 5, 8, 9, 10]);

//complexity: //O(n^2)

/*============
9. Remove characters
Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the 
characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". 
Do not use Javascript's filter, split, or join methods.

Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
Output: 'Bttl f th Vwls: Hw vs. Grzny'
============*/

function removeCharacters(str) {
  let initStr = '';
  return str.replace(/[aeiou]/ig, ''); 
}
//console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

//Complexity:O(n)

/*============

10. Products
Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. See the following example input and output.

Input:[1, 3, 9, 4]
Output:[108, 36, 12, 27]

============*/


/*============

11. 2D array
Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

Input:
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];
Output:
[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]];

============*/

/*============

12. String rotation
Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

Input: amazon, azonma

Output: False

Input: amazon, azonam

Output: true
=================*/
