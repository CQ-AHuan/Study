// 期待输出: ['aaa', 'bb', 'cccc', 'ddddddd']
var arr = ['a', 'a', 'a', '*', 'b', 'b', '*', 'c', 'c', 'c', 'c', '*', 'd', 'd', 'd', 'd', 'd', 'd', 'd'];

var res = []; // ['aaa']
var str = '';
for (var i = 0; i < arr.length; i++) {
    var letter = arr[i];
    // letter: 'a', '*', 'b', ...
    if (letter !== '*') {
        str += letter;
    }

    if (letter === '*' || i === arr.length - 1) {
        res.push(str);
        str = '';
    }

    var str = ''

}

console.log(res);
