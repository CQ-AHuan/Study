function split(str, separator) {
    // str: '2011-01-01'
    // 期待: '2', '0', '1', ...
    str += separator;
    var res = []
    var tmp = ''; // 期待拼接成'2011'
    for (var i = 0; i < str.length; i++) {
        // str[i]: '2', '0', '1', ...
        if (str[i] === separator) {
            res.push(tmp);
            tmp = '';
        } else {
            tmp += str[i];
        }
    }
    return res;
}

console.log(split('2011-01-01', '-')); // ['2011', '01', '01']
console.log(split('hello world', ' ')); // ['hello', 'world']
