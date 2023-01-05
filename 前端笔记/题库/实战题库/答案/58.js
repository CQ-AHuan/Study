// 找出数组中单词最多的句子
const input = [
    'Alice and bob love program',
    'I think so too',
    'This is great thanks  very much',
    'aaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
];

const output = 'this is great thanks very much';

// 计算句子中单词的个数
function getWordCount(sentence) {
    return sentence.split(' ').filter(item => item).length;
}

function findMostWordsSentence(input) {
    return input.sort((a, b) => getWordCount(b) - getWordCount(a))[0];
}

console.log(findMostWordsSentence(input));
