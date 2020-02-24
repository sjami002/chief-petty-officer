function anagram(stringA, stringB){
    if(cleanStr(stringA) !== cleanStr(stringB)){
        return false;
    }
}

function cleanStr(str){
    str.replace(/[^\w]/g, '').toLowerCase.split('').sort().join('');
}