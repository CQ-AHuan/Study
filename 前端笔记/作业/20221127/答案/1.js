// 1.封装一个函数，输入一个单词，返回元音字母的数量
/**
 * @param { string[] } letters 全量数组
 * @param { string } expect 要找的数组项
 */
function includes(letters, expect) {
    for (const letter of letters) {
        if (letter === expect) {
            return true;
        }
    }
    return false;
}

function getCount(word, letters) {
    let count = 0;
    // 期待: 单词中所有的字母
    for (const letter of word) {
        // letter: 'h', 'e', ...
        // 在letters数组中查找当前字母 如果有就计数
        if (includes(letters, letter)) {
            count++;
        }
    }
    return count;
}

const letters = ['a', 'u', 'i', 'o', 'e'];
console.log( getCount( 'hello', letters ) ); // 2
console.log( getCount( 'hello world', letters ) ); // 3