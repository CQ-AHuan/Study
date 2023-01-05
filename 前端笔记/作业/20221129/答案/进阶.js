function getCommonPrefix(words) {
    const tmpWords = words.concat();
    let str = '';

    // 只拿一次标志位
    const firstWord = tmpWords.shift(); // 'flower'

    for (let i = 0; i < firstWord.length; i++) {
        // i: 0, 1, 2, 3
        // 检查是否每一项都和firstWord[i]相等
        if (tmpWords.every(word => word[i] === firstWord[i])) {
            str += firstWord[i]; // 'f'
        } else {
            return str;
        }
    }

    return str;
}

console.log( getCommonPrefix(['flower', 'flow']) ); // 'flow'
console.log( getCommonPrefix(['dog', 'racecar', 'car']) ); // ''
console.log( getCommonPrefix(['ahello', 'aworld', 'a', 'abc', 'ab']) ); // 'a'
