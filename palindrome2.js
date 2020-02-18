function palindrome(str){
    const arr = str.split("")
   return arr.every((char, i) => {
        return char === arr[arr.length -1 -i]
    })
}

// Alternate soln: also works on the str instead of the arr
// function palindrome(str) {
//     return str.split("").every((char, i) => {
//         return char === str[str.length - 1 - i]
//     })
// }