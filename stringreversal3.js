function reverseStr(str){
  return  str.split("").reduce((rev, char) => char + rev)
}