// 30. Write a Program to Print the Hourglass Pattern

// function printHourglassPattern (num){
//     for(let i=num-1; i>=0; i--){
//         let string="";
//         for(let j=0; j<num-i; j++){
//             string += ' ';
//         }
//         for(let j=0; j<=i; j++){
//             string += ' *';
//         }
//         console.log(string);
//     }
//     for(let i=1; i<num; i++){
//         let string="";
//         for(let j=0; j<num-i; j++){
//             string += ' ';
//         }
//         for(let j=0; j<=i; j++){
//             string += ' *';
//         }
//         console.log(string);
//     }
// };

// printHourglassPattern(5);


// 35. Write a Program to Print Floyd’s Triangle

// function printFloydTriangle(num){
//   let n=1;
//   for(let i=0;  i<num; i++){
//     let string="";
//     // for(let j=0; j<num-i; j++){
//     //   string += " ";
//     // }
//     for(let j=0; j<=i; j++){
//       string += ` ${n++}`;
//     }
//     console.log(string);
//   }
// };

// printFloydTriangle(3);



// 38. Write a program to Print the Given String in Reverse Order Using Recursion


// function reverseStr(s, i = 0) {
//   if (i === s.length) {
//       return "";
//   }
//   const val = reverseStr(s, i + 1) + s[i];
//   console.log(val);
//   return val;
// }

// let reversedStr = reverseStr('helloworld');
// console.log(reversedStr);


// 39. Write a Program to Check if the Given String is Palindrome or not Using Recursion

// function isPalindrome(string, i=0){
//   const originalString = string;
//   if(string.length  === 1){
//     return true;
//   }
//   if(originalString === reverseStr(originalString)){
//     return true;
//   } else return false;
// };

// console.log(isPalindrome('madam'));
// console.log(isPalindrome('meee'));


// 40. Write a Program to Calculate the Length of the String Using Recursion

// function lengthOfString(string, i=0){
//   let count=0;
//   if(string === '') return 0;
//   return 1 + lengthOfString(string.substring(1));
// };

// console.log(lengthOfString('helloworld'));
// console.log(lengthOfString('welcome'));


// 41. Write a Program to Calculate the Factorial of a Number Using Recursion


// function factorialOfNum(num){
//   if(num === 0) return 1;
//   return num * factorialOfNum(num-1);
// };


// console.log(factorialOfNum(5));


// 42. Write a Program to Count the Sum of Numbers in a String

// function sumOfNumInString(number){
//   let sum=0;
//   for(let i=0; i<number.length; i++){
//     if(isNaN(number[i])) return 0;
//     const num = Number(number[i]);
//     sum += num;
//   }
//   return sum;
// };
 
// console.log(sumOfNumInString('2342'));

// 44. Write a Program to  Swap the Values of Two Variables Without Using any Extra Variable

// method: 1
// function swapValue(first, second){
//   console.log('first: ', first);
//   console.log('second: ', second);

//   [first, second] = [second, first];
//   console.log('After swapping');
//   console.log('first: ', first);
//   console.log('second: ', second);

// };

// method: 2
// function swapValue(first, second){
//   console.log('first: ', first);
//   console.log('second: ', second); 

//   first = second + first;
//   second = first - second;
//   first = first - second;

//   console.log('After swapping');
//   console.log('first: ', first);
//   console.log('second: ', second);

// };

// console.log(swapValue(45,67));


// 46. Write a Program to Check for the Equality of Two Numbers Without Using Arithmetic or Comparison Operator

// function isNumberEqual(num1, num2){
//     const str1 = num1.toString();
//     const str2 = num2.toString();

//     return str1.localeCompare(str2) === 0;
// };

// console.log(isNumberEqual(45,67));
// console.log(isNumberEqual(67,67));


// 47. Write a Program to Find the Maximum and Minimum of the Two Numbers Without Using the Comparison Operator

// const number = {
//     minAndMax1(num1, num2){
//         const max = ((num1 + num2) + Math.abs(num1 - num2)) / 2;
//         const min = ((num1 + num2) - Math.abs(num1 - num2)) / 2;
//         console.log(`Max : ${max}, Min : ${min}`);
//     },
//     minAndMax2(num1, num2){
//         const diff = num1 - num2;
//         const k = (diff >> 31) & 1;
//         console.log(diff >> 31);
//         // console.log(`Max : ${max}, Min : ${min}`);
//     }
// };


// method: 1
// function minAndMax(num1, num2){
//     const max = ((num1 + num2) + Math.abs(num1 - num2)) / 2;
//     const min = ((num1 + num2) - Math.abs(num1 - num2)) / 2;
//     console.log(`Max : ${max}, Min : ${min}`);
// };

// minAndMax(5,60);
// minAndMax(-5,0);

// number.minAndMax2(65, 23);


// 48. Write a Program for Octal to Decimal Conversion
