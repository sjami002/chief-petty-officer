function reverseInt(n){
    const reversed = n.toString().split("").reverse().join("")

    if(n < 0){
        return parseInt(reversed) * -1
    }
    return parseInt(reversed)
}

// Alternate soln with Math.sign(n)
// function reverseInt(n) {
//     const reversed = n.toString().split("").reverse().join("")

//         return parseInt(reversed) * Math.sign(n);
   
// }