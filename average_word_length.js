function isAlpha( char ) {
    return (char >= 'a' && char <= 'z') || ((char >= 'A' && char <= 'Z'));
}

function avgWordLengthCalc( str ) {
    let charLen = 0;

    let arrOfWords = str.split(' ');

    for (const item of arrOfWords) {
        for (const char of item) {
            if (isAlpha(char)) {
                charLen += 1;
            }
        }
    }
    
    return charLen/arrOfWords.length;
}

// console.log(avgWordLengthCalc("q w e r t y.")); // 1.00
// console.log( avgWordLengthCalc("The reduce method executes a reducer function.") ); // 5.57
// console.log( avgWordLengthCalc("callback is called, accumulator!") ); // 6.75
// console.log( avgWordLengthCalc("") ); // 0
