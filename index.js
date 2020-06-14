//'use strict';

/*In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

*/

function alphabetPosition(text) {
    let arr = text.toLowerCase().split(' ').join('');
    let numArr = [];
    for (let i=0; i<arr.length; i++) {
      let num = arr.charCodeAt(i);
      if (num >= 97 && num <= (97+25)){
        numArr.push(num - 96);
      }
    }
    return numArr.join(' ');
  }
  console.log(alphabetPosition("The sunset sets at twelve o' clock."));

/*
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.
*/

  function digPow(n, p){
    let arrNum = n.toString().split('');
    let sum = 0;
    let k = 0;
    for (let i = 0; i < arrNum.length; i++) {
        let x = Number(arrNum[i]);
        let y = p + i;
        sum += Math.pow(x, y);
    }
    k = sum / n;
    return k % 1 ? -1 : k; 
  }
  console.log(digPow(89, 1));
  console.log(digPow(46288, 3));

  /*
  Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 
  */

  function createPhoneNumber(numbers){
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
  }
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/*The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. */

function tickets(peopleInLine){
    
    let result = false;
    for (let i = 0; i < peopleInLine.length; i++) {
        let peopleArr = [...peopleInLine];
        let minArr = peopleArr.splice(0, i+1);
        let x = minArr.reduce((total,currentValue) => {total + currentValue}, 0) - peopleInLine[i];
        if(peopleInLine[i] = 25){
            result = true;
        }else if(peopleInLine[i] - 25 <= (x - 25*i)) {
            result = true;
        }else { result = false;}
  }
  console.log(result);
  return result?'NO':'YES';
}
console.log(tickets([25, 25, 50, 50, 100]))

/*You are going to be given an array of integers. 
Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
*/


  function findEvenIndex(arr){
    let index = 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for(let i = 0; i < arr.length ; i++){
      let arrLeft = arr.slice(0, i);
      let arrRight = arr.slice(i+1, arr.length);
      let sumLeft = arrLeft.reduce(reducer,0);
      let sumRight = arrRight.reduce(reducer,0); 
      if (sumLeft === sumRight){
            return index = i;
        } else (index = -1 );
    }  return index;
  } 
console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([1,2,3,4,5,6]));


/*
You are given an array strarr of strings and an integer k. 
Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
*/

function longestConsec(strarr, k) {
    let n = strarr.length;
    if( n === 0 || k > n || k <= 0){return ""} else {
    let resultArr = [];
    for (let i = 0; i < n - k +1; i++) {
        let subArr ='';
        for (let j = i; j < k + i ; j++){
            subArr += strarr[j] 
        }
        resultArr.push(subArr)
    }
    let numberArr = resultArr.map((items)=>items.length);
    let maxNumber = 0;
    for(let i=0; i<numberArr.length; i++) {
        if(maxNumber < numberArr[i]) {
            maxNumber = numberArr[i]
        }
    }
    return resultArr[numberArr.indexOf(maxNumber)]
    } 
}


console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2));
//console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2));