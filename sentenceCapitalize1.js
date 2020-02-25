function capitalize(str){
    const words = []; // placeholder

    for (let word of str.split(' ')){     // splitting words at spaces to create an array
        words.push(word[0].toUpperCase() + word.slice(1));
        // for each word in the array
            // uppercase the first letter
            // join the first letter with the rest of the letter
            // push it into the results array
    }
    return words.join(' ');
    // join the words array back into a string and return them
}