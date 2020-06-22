
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
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2));

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/
function pigIt(str){
    let wordArr = str.split(" ");
    let tempWord =[];
    for(let i=0; i<wordArr.length; i++) {      
        if(wordArr[i].length > 1 || wordArr[i].charCodeAt() >= 65)
        {tempWord[i] = wordArr[i].slice(1, wordArr[i].length) + wordArr[i].charAt(0) + 'ay'}
        else { tempWord[i] = wordArr[i]}
    } 

    return tempWord.join(' ');
}

console.log(pigIt('O Pig latin is cool !'));

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

function order(words){
    let newArr = words.split(' ');
    let tempArr = [...newArr];
    for(let i = 0; i<newArr.length; i++) {
        let word = newArr[i].split('');
        let index = 0;
        for (let j = 0; j<word.length; j++) {
            if( word[j].charCodeAt() >= 48 && word[j].charCodeAt() <= 57) 
            {index = Number(word[j]) - 1}
        }
        tempArr[index] = newArr[i];
    }
    return tempArr.join(' ');
  }

console.log(order("is2 Thi1s T4est 3a"))


/* 
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/

function expandedForm(num) {
    let numArr = num.toString().split('');
    let resultArr = [];
    for(let i = 0; i<numArr.length; i++) {
        if(Number(numArr[i]) !== 0){
            resultArr.push(Number(numArr[i]) * Math.pow(10, numArr.length - i -1))
        }
    }
    return resultArr.join(' + ');
  }

console.log(expandedForm(70304));


/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) {
   let newArr = arr.sort((a,b)=> a - b);
   return arr[0]==arr[1]?arr.pop():arr[0];
}
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));

//best
/*

only the unique one can pass the find test becasue it's index are first and also last.
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
*/

/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
	let arr = s.toUpperCase().split('');
  let arrResult = [];
  for(let i = 0; i<arr.length; i++) {
    let lower = '';
    for(let j = 0; j <= i; j++) {
    arrResult[i]=(arr[i] + lower)
    lower = lower + arr[i].toLowerCase()
    }
    
  }
  return arrResult.join('-')
}