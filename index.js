/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

// function findOutlier(integers) {
//     const arr = integers.map((item) => item % 2)
//     const sum = arr.reduce((a, b) => a + b, 0)
//     let index = 0
//     if (sum === 1) {
//         index = arr.indexOf(1)
//     } else {
//         index = arr.indexOf(0)
//     }
//     return integers[index]
// }

function iqTest(numbers) {
    let even = numbers.split(' ').filter((item) => Number(item) % 2 === 0)
    let odd = numbers.split(' ').filter((item) => Number(item) % 2 != 0)
    return even.length === 1 ? numbers.split(' ').indexOf(even[0]) + 1 : numbers.split(' ').indexOf(odd[0]) + 1
    
    // ...
}


console.log(iqTest("2 4 6 -8 7 8 10 12 14 16"))


/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
*/

function likes(names) {
    const n = names.length
    if (n === 0) { return `no one likes this` }
    else if (n === 1) { return `${names[0]} likes this` }
    else if (n === 2) { return `${names[0]} and ${names[1]} like this` }
    else if (n === 3) { return `${names[0]}, ${names[1]} and ${names[2]} like this` }
    else { return `${names[0]}, ${names[1]} and ${names.length - 2} others like this` }
}
