/**
 * 输入n, 打印
 * 0, 0, 0
 * 1, 1, 1
 * 2, 2, 2
 * 3, 3, 3
 * 4, 4, 4
 * ...
 * n, n, n
 */
var n = +prompt('输入n');
for (var i = 0; i <= n; i++) {
    // i: 1, 2, 3, ..., n
    for (var j = 0; j < 3; j++) {
        console.log(i);
    }
}

/**
 * 1.
 * 输入n, 输入m
 * 如: n: 4, m: 5
 *
 * 0, 0, 0, 0
 * 1, 1, 1, 1
 * 2, 2, 2, 2
 * 3, 3, 3, 3
 * 4, 4, 4, 4
 */
var n = +prompt('n');
var m = +prompt('m');
for (var i = 0; i < m; i++) {
    // i: 0, 1, 2, 3, 4
    for (var j = 0; j < n; j++) {
        console.log(i);
    }
}

/**
 * 2.
 * 打印
 * 1.1, 1.2, 1.3, 1.4
 * 2.1, 2.2, 2.3, 2.4
 * 3.1, 3.2, 3.3, 3.4
 */
for (var i = 1; i < 4; i++) {
    // i: 1, 2, 3
    // 外层循环第一轮: i: 1
    for (var j = .1; j < .5; j += .1) {
        // j: .1, .2, .3, .4
        console.log(i + j);
    }
}

/**
 * 3.
 * 输入行数rowCount
 * 输入列数colCount
 * 打印rowCount行 colCount列的效果
 * 如:
 * 3行4列
 * 'aaaa'
 * 'aaaa'
 * 'aaaa'
 *
 * 2行8列
 * 'aaaaaaaa'
 * 'aaaaaaaa'
 */

var rowCount = +prompt('行数'); // 2
var colCount = +prompt('列数'); // 8
for (var i = 0; i < rowCount; i++) {
    var str = '';
    for (var j = 0; j < colCount; j++) {
        // 产生8个a  加到str上
        str += 'a';
    }
    // 目的: 制作'aaaaaaaa'
    console.log(str);
}
