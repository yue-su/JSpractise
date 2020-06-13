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