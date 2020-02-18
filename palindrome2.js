function palindrome(str){
    const arr = str.split("")
   return arr.every((char, i) => {
        return char === arr[arr.length -1 -i]
    })
}