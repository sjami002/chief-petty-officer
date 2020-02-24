function capitalize(str){
    let result = str[0].toUpperCase();
    // capitalize the first letter of the senternce

    for(let i=1; i<= str.length-1; i++){
        if(str[i-1] === ' '){       // check for an empty space before every letter
            result += str[i].toUpperCase();  // uppercase the letter if space is found and push to result
        }else{
            result += str[i]; // if space not found, push letter to result as is
        }
    }
    return result;
}