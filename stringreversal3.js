function reverseStr(str){
  return  str.split("").reduce((rev, char) => char + rev)
}

// Alternative solution: works with or without the initial value (in thsi case, empty str)
// function reverseStr(str) {
//     return str.split("").reduce((rev, char) => char + rev, "")
// }