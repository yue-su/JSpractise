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
    let t = 0;
    for (let i = 0; i < arrNum.length; i++) {
        let x = Number(arrNum[i]);
        let y = p + i;
        sum += Math.pow(x, y);
    }
    k = sum / n;
    if ((k % 1) === 0) {return k} else {return -1} 
  }

  console.log(digPow(89, 1));
  console.log(digPow(46288, 3));