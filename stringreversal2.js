function reverseStr(str) {

    // create an empty string called reverse
    let reversed = "";

    // for each character in the provided string
    // take the char and add it to the beginning of the empty str "reversed"

    for (let char of str) {
        reversed = char + reversed
    }
    return reversed;
}