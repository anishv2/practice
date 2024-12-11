// 21. Write a Program to Calculate the Lowest Common Multiple (LCM) of Two Numbers

// function lcm(num1, num2){
//     return (num1 * num2)/gcd(num1, num2);
// };

// console.log(lcm(5,30));
// console.log(lcm(51,3));


// 22. Write a Program for Finding the Roots of a Quadratic Equation

// equation: x2 + bx + c = 0
// formula : x = (-b ± √ (b2 - 4ac) )/2a

// function findRootOfQuadraticEquation(a, b, c){
//     const underRootVal = b * b - 4 * a * c;
//     const sqrtVal = Math.sqrt(underRootVal);
//     const root1 = (-b + sqrtVal)/2 * a;
//     const root2 = (-b - sqrtVal)/2 * a;

//     if(underRootVal > 0){
//         return `Roots are real and different: ${root1} and ${root2}`
//     }
//     if(underRootVal === 0){
//         return `Roots are real and same: ${root1}`
//     }
//     return `Roots are imaginary: ${root1} and ${root2}`

// }

// console.log(findRootOfQuadraticEquation(1,-7,10));


// 23. Write a Program to Find the Smallest and Largest Element in an Array

// function findSmallestElement(arr){
//     let min = arr[0];
//     let max = arr[0];
//     for(let i=0; i<=arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return `Smallest element is ${min} and largest element is ${max}`
// }

// console.log(findSmallestElement([4,422,6,4411,31313,,3,7,121]));


// 24. Write a Program to Find the Second Smallest number in an Array

// function findSecondSmallestElement(arr){
//     let firstSmall = Infinity;
//     let secondSmall = Infinity;
//     if(arr.length < 2){
//         console.log('Invalid array');
//         return;
//     }
//     for(let num of arr){
//         if(num < firstSmall){
//             secondSmall = firstSmall;
//             firstSmall = num;
//         } else if(num < secondSmall && num !== firstSmall){
//             secondSmall = num;
//         }
//     }
//     return secondSmall;
// };

// console.log(findSecondSmallestElement([4,422,6,4,4411,313]));


// 25. Write a Program to Calculate the Sum of Elements in an Array

// Method: 1

// function sumOfArrayElements(arr){
//     let sum = 0;
//     for(let num of arr){
//         sum += num;
//     }
//     return sum;
// };

// console.log(sumOfArrayElements([2,55,24,54,67]));


// Method: 2

// function sumOfArrayElements(arr){
//     return arr.reduce((acc, val)=> acc + val, 0);
// };

// console.log(sumOfArrayElements([2,55,24,54,67]));

// 26. Write a Program to Check if the Given String is Palindrome or Not

// Method: 1
// function isStringPalindrome(string){
//     let reversedString = string.split('').reverse().join('');
//     if(string === reversedString) return true;
//     else return false;
// };

// Method: 2

// function isStringPalindrome(string){
//     for(let i=0; i<=string.length; i++) {
//         if(string[i] !== string[string.length-i-1]){
//             return false;
//         }
//         else return true;
//     }
// };

// console.log(isStringPalindrome('madam'));
// console.log(isStringPalindrome('good'));


// 27. Write a Program to Check if Two Strings are Anagram or Not

// method: 1
// function areAnagram(string1, string2){
//     const str1 = string1.replace(/\s+/g, '').toLowerCase();
//     const str2 = string2.replace(/\s+/g, '').toLowerCase();

//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');

//     if(sortedStr1 === sortedStr2) return true;
//     else return false;

// };


// method: 2

//  function areAnagram(string1, string2){
//     const noOfChars = 256;
//     let count1=[];
//     let count2=[];
//     for(let i=0; string1[i] && string2[i]; i++){
//         count1[string1[i]]++;
//         count2[string2[i]]++;
//     }
//     for(let i=0; i<=noOfChars; i++){
//         if(count1[i] !== count2[i]) return false;
//     }
//     return true;
//  };

// console.log(areAnagram('LISTEN', 'SILENT'));
// console.log(areAnagram('LISTEN', 'SILE'));





// 28. Write a Program to Print a Diamond Pattern

function printDiamond(num, symbol='*'){
    for(let i=0; i<num; i++){
      let string = '';
         for(let j=0; j<num-i-1; j++){
            string += ' ';
         }
         for(let j=0; j<=i; j++){
            string += `${symbol} `;
         }
         console.log(string);
    }
    for(let i=num-2; i>=0; i--){
      let string='';
      for(let j=0; j<num-i-1; j++){
         string += ' ';
      }
      for(let j=0; j<=i; j++){
         string += `${symbol} `
      }
      console.log(string);
    }
}

printDiamond(6);




// source: https://www.geeksforgeeks.org/cpp-coding-interview-questions-and-answers/ 
