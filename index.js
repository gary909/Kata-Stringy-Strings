function stringy(size) { 
    let myStr = ""; // emptry string
    for (var i = 0; i < size; i++){
        myStr = myStr + '10'; // push '10' for every amount 
    }
    var halfStr = myStr.substring(0, size) // then half it
    return halfStr;
}

console.log(stringy(3)); // 101
console.log(stringy(6)); // 101010
console.log(stringy(4)); // 1010
console.log(stringy(12)); // 101010101010