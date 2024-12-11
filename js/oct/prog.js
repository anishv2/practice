

// 1. check even or odd number

// function checkNumberisEvenOrOdd(num){
//     if(num % 2 == 0) return true;
//     return false;
// }

// console.log(checkNumberisEvenOrOdd(434));
// console.log(checkNumberisEvenOrOdd(43));
// console.log(checkNumberisEvenOrOdd(439));


// 2. get ASCII code of english letter

// function getASCIICodeOfLetter(letter){
//     return letter.charCodeAt(0);
// };

// console.log(getASCIICodeOfLetter('A'));


// 3. check whether a character is an alphabet 

// function isAlphabet(text){
//     if((text>='A' && text<='Z') || (text>='a' && text<='z')){
//         return true;
//     } else return false;
// };

// console.log(isAlphabet('34038535'));
// console.log(isAlphabet('lwuoqwr'));


// 4. get the length of string without using .length method

// by most basic method
// function lengthOfString(str){
//     let len=0;
//     while(str[len]!==undefined){
//         len++;
//     }
//     return len;
// };

// console.log(lengthOfString('sasfjslfjasfasf'));
// console.log(lengthOfString('sasfj'));


// 5. Write a Program to Toggle Each Character in a String 

// function toggleChars(text){
//     let result = '';
//     for(const char of text){
//         if(char === char.toUpperCase()){
//             result += char.toLowerCase();
//         } else {
//             result += char.toUpperCase();
//         }
//     }
//     return result;
// };

// console.log('Toggle characters', toggleChars('Good Night'));




// 6. Write a Program to Print Check Whether a Character is an Alphabet or Not

// function isAlphabet(character){
//     const charCode = character.charCodeAt(0);
//     if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//         console.log("It's alphabet");
//     } else console.log("Not alphabet");
// }

// isAlphabet('23');
// isAlphabet('r');
// isAlphabet('e');


// 7. Write a Program to Find the Length of the String Without using string.length() Function 

// function findStringLength(str){
//     return +Object.keys(str).pop()+1;
// }

// console.log(findStringLength('goodevening'));

// 8. Write a Program to Toggle Each Character in a String 

// function stringToLowerUpper(str){
//     let string='';
//     for(let ch of str){
//         if(ch === ch.toUpperCase()){
//             string += ch.toLowerCase();
//         } else string += ch.toUpperCase();
//     }
//     return string;
// };

// console.log(stringToLowerUpper('Hello David'));



// 12. Write a Program to Remove Spaces From a String

// method 1

// function removeSpaceFromString(str){
//     return str.trim().replace(/\s+/g, '');
// }

// method 2

// function removeSpaceFromString2(str){
//     return str.split(' ').join('');
// }


// method 3

// function removeSpaceFromString3(str){
//     return [...str].filter(ch=>ch!== ' ').join('');
// };


// method 4
// ES 2021 method

// function removeSpaceFromString4(str){
//     return str.replaceAll(' ', '');
// };



// console.log(removeSpaceFromString('good evening'));
// console.log(removeSpaceFromString2('good evening'));
// console.log(removeSpaceFromString3('good evening'));
// console.log(removeSpaceFromString4('good evening'));


// 13. Write a Program to Find the Sum of the First N Natural Numbers


// function sumOfFirstNaturalNumbers(number){
//     let sum=0;
//     for(let i=1; i<=number; i++){
//         sum+=i;
//     }
//     return sum;
// };

// console.log(sumOfFirstNaturalNumbers(10));


// 14. Write a Program to Find the Factorial of a Number Using Loops

// function factorialOfNumber(number){
//     let factorial=1;
//     if(number <= 1) {
//         return 1;
//     }
//     for(let i=1; i<=number; i++){
//         factorial *= i;
//     }
//     return factorial;
// }

// console.log(factorialOfNumber(3));
// console.log(factorialOfNumber(8));
// console.log(factorialOfNumber(5));


// function factorialOfNumber(number){
//     let factorial=1;
//     if(number <= 1) {
//         factorial = 1;
//     }
//     for(let i=number; i>=1; i--){
//         factorial =  factorial * i;
//     }
//     return factorial;
// }


// console.log(factorialOfNumber(5));


// 15. Write a Program to Find a Leap Year or Not

// function isLeapYear(year){
//     if((year % 100 !== 0 || year % 400 == 0) && year % 4 == 0){
//         return true;
//     } else return false;
// };

// console.log(isLeapYear(2022));
// console.log(isLeapYear(2024));


// 17. Write a Program to Check Number is Palindrome or not

// function isPalindrome(number){
//     let n=number;
//     let k=0;

//     while(n !== 0){ 
//         k = (k * 10) + (n % 10);
//         n = Math.floor(n/10);
//     };
//     if(k === number){
//         return true;
//     } else return false;
// }


// console.log(isPalindrome(454));



// 18. Write a Program to Check Whether a Number is an Armstrong Number or Not


// function isArmstrong(number){
//     let n = number;
//     let temp = Math.floor(number);
//     let ans = 0;
//     let count = 0;

//     while(n > 0){
//         n = Math.floor(n / 10);
//         count++;
//     }

//     ans = number.toString().split('').reduce((acc, val)=>acc + Math.pow(parseInt(val), count), 0);

//     if(ans === temp){
//         return true;
//     } else return false;
// };


// console.log(isArmstrong(153));
// console.log(isArmstrong(203));


// 19. Write a Program to Find the Nth Term of the Fibonacci Series

// function sumOfFibonacci(num){
//     let sum = 0;
//     let first = 0;
//     let second = 1;
//     if(num === 0) return first;
//     if(num === 1) return second;
    
//     for(let i = 2; i <= num; i++){
//         sum = first + second;
//         first = second;
//         second = sum;
//     }
//     return sum;
// }

// console.log(sumOfFibonacci(5));


// 20. Write a Program to Calculate the Greatest Common Divisor of Two Numbers
 
// function gcd(num1, num2) {
//     while (num2 !== 0) {
//         let temp = num2;
//         num2 = num1 % num2; 
//         num1 = temp;
//     }
//     return num1;
// }

// console.log(gcd(10,50));
// console.log(gcd(10,33));








// source: https://www.geeksforgeeks.org/cpp-coding-interview-questions-and-answers/ 