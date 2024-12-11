
/*  fibanacci number */

// function fibanacci(num){
//     let prev=0,next=1;
//     let sum=prev+next;
//     const fbSeries=[];
//     if(num<=1) return;
//     if(fbSeries.length>num) return;
   
//     for(let i=0; i<num; i++){
//         prev=next;
//         next=sum;
//         sum=prev+next;
//         console.log(prev,'+',next,'=',sum);
//     }
// }

// fibanacci(10); // first 10 fibanacci series


/* 
64. Concatenate two strings and return the result.
    If the length of the strings does not match, then remove the characters from the longer string.  
*/

// Method:1 with string.length property and string.concat method (Imperative)

// function stringConcateByImperative(str1,str2){ 
//     if(str1.length===str2.length){
//         return str1.concat(' ',str2);
//     }
//     else if(str1.length > str2.length){
//         return str1.substring(0,str2.length);
//     }
//     else return str2.substring(0,str1.length);
// }

// console.log('result',stringConcateByImperative('hell66o','world'));

// Method:2 without string.length property and string.concat method (Declarative)

// function stringConcateByDeclarative(str1,str2){
//     const firstString=+Object.keys(str1).pop()+1;
//     const secondString=+Object.keys(str2).pop()+1;

//     console.log(firstString,secondString)
//     if(firstString===secondString){
//         return str1+' '+str2;
//     }
//     else if(firstString>secondString){
//         return str1.substring(0,secondString);
//     }
//     else return str2.substring(0,firstString);
// }

// console.log('result',stringConcateByDeclarative('hello','world'));




/* 82. Add two positive integers without carrying. */

// function addTwoNumbersWithoutCarry(num1,num2){
//     let sum=0, t=1;
//     while((num1>0&&num2>0)||(num1||num2)){
//         const lastdigit=(num1+num2)%10;
//         sum=sum+t*lastdigit; // or sum+=t*lastdigit
//         num1=Math.floor(num1/10);
//         num2=Math.floor(num2/10);
//         t*=10; // or t=t*10
//     }
//     return sum;
// }

// console.log('result of add two numbers:',addTwoNumbersWithoutCarry(342,943));

