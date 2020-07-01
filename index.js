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

function songDecoder(song) {
    // ...
    let arr = song.replace(/WUB/g, ' ').split(' ')
    let arr2 =[]
    for (let i = 0; i < arr.length; i++){
        if(arr[i] !== "") 
            arr2.push(arr[i])
        }
    return arr2.join(" ")
}

console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))


function arrayDiff(a, b) {
    for (let i = 0; i < b.length; i++) {
        a = a.filter((item) => item !== b[i])
    }
    return a
}

console.log(arrayDiff([3, 4, 5, 6, 7], [3, 4]))

var maxSequence = function (arr) {
    if (arr.filter((e) => e > 0).length === 0 || arr.length === 0) { return 0 }
    else if (arr.length === 1) { return arr[0] }
    else {
        for (let i = 0; i < arr.length; i++) {
            
            arr[i] = Math.max(arr[i] + arr[i - 1], arr[i])
            
        }
    }
    return arr.sort((a, b) => b - a)[0]
}
console.log(maxSequence([-5, -1, -7]))

function humanReadable(seconds) {
    let hms = [0, 0, 0]
    hms[0] = Math.floor(seconds / 3600)
    hms[1] = Math.floor((seconds - hms[0] * 3600) / 60)
    hms[2] = seconds - hms[0] * 3600 - hms[1] * 60
    let arr = hms.map((item) => item < 10 ? '0'.concat(item.toString()) : item )

    return `${arr[0]}:${arr[1]}:${arr[2]}`
}

console.log(humanReadable(10))

function validParentheses(parens) {
    
}

console.log(validParentheses("())"))

function formatDuration(seconds) {
    let hms = [0, 0, 0, 0, 0]
    hms[0] = Math.floor(seconds / 31536000)
    hms[1] = Math.floor((seconds - hms[0]*31536000) / 86400) 
    hms[2] = Math.floor((seconds - hms[0]*31536000 - hms[1]*86400 )/ 3600)
    hms[3] = Math.floor((seconds - hms[0]*31536000 - hms[1]*86400 - hms[2]*3600) / 60)
    hms[4] = seconds - hms[0] * 31536000 - hms[1] * 86400 - hms[2] * 3600 - hms[3] * 60

    let hmsStr = []
    hmsStr[0] = hms[0] > 1 ? hms[0].toString() + ' years' : hms[0].toString() + ' year'
    hmsStr[1] = hms[1] > 1 ? hms[1].toString() + ' days' : hms[1].toString() + ' day'
    hmsStr[2] = hms[2] > 1 ? hms[2].toString() + ' hours' : hms[2].toString() + ' hour'
    hmsStr[3] = hms[3] > 1 ? hms[3].toString() + ' minutes' : hms[3].toString() + ' minute'
    hmsStr[4] = hms[4] > 1 ? hms[4].toString() + ' seconds' : hms[4].toString() + ' second'
    
    let filtered = []
    for (let i = 0; i < 5; i++) {
        if (hms[i] !== 0) {
            filtered.push(hmsStr[i])
        }
    }

    switch (filtered.length) {
        case 0:
            return `now`
        case 1:
            return `${filtered[0]}`
        case 2:
            return `${filtered[0]} and ${filtered[1]}`
        case 3:
            return `${filtered[0]}, ${filtered[1]} and ${filtered[2]}`
        case 4:
            return `${filtered[0]}, ${filtered[1]}, ${filtered[2]} and ${filtered[3]}`
        case 5:
            return `${filtered[0]}, ${filtered[1]}, ${filtered[2]}, ${filtered[3]} and ${filtered[4]}`
    }

    return filtered
}

console.log(formatDuration(3600))    // returns "1 minute and 2 seconds"
console.log(formatDuration(366222222))  // returns "1 hour, 1 minute and 2 seconds"

function nextBigger(n) {
    let arr = n.toString().split('').sort((a, b) => b - a).join('')
    return arr
}

console.log(nextBigger(2017))