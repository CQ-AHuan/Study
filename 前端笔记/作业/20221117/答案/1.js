// 1. 打印25到50的奇数
for (var i = 25; i <= 50; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

// 2. 打印'hello50', 'hello48', 'hello46', ... 'hello2'
// 思路: 拿到所有的50到2的偶数
for (var i = 50; i > 0; i -= 2) {
    console.log('hello' + i);
}

// 3. 计算100以内所有个位数不为0的数的和
var sum = 0;
for (var i = 0; i < 100; i++) {
    if (i % 10 !== 0) {
        sum += i;
    }
}
console.log(sum);

// 4. 使用一个console输出以下效果

//    ```js
//    // aaaaa
//    // aaaa
//    // aaa
//    // aa
//    // a

//    // 注: 换行符为\n
//    // 如
//    console.log('hello\nworld');
//    // 结果为
//    // hello
//    // world

var str = '';
// 循环5次
for (var i = 0; i < 5; i++) {
    // 第一轮期待得到: 'aaaaa' + '\n'
    // 第二轮期待得到: 'aaaa' + '\n'
    // ...
    // 第二轮期待得到: 'a'

    // 第一轮: i: 0  j < 5
    // 第二轮: i: 1  j < 4
    // 第三轮: i: 2  j < 3
    // 第四轮: i: 3  j < 2
    // 第五轮: i: 4  j < 1
    // for (var j = 0; j < 5 - i; j++) {
    //     str += 'a';
    // }

    for (var j = i; j < 5; j++) {
        str += 'a';
    }

    // str: 'aaaaa'
    // 不是最后一轮 就加换行符
    if (i !== 4) {
        str += '\n';
    }
}

// 期待的结果
console.log(str); // 'aaaaa\naaaa\naaa\naa\na'

// 5. 使用一个console输出以下效果（固定的5行5列）
var str = '';
for (var i = 0; i < 5; i++) {
    // 第一轮期待得到: 'aaaaa' + '\n
    // 第二轮期待得到: 'a   a' + '\n
    // 第三轮期待得到: 'a   a' + '\n
    // 第四轮期待得到: 'a   a' + '\n
    // 第五轮期待得到: 'aaaaa' + '\n

    // 无脑做法
    // if (i === 0 || i === 4) {
    //     for (var j = 0; j < 5; j++) {
    //         str += 'a';
    //     }

    // } else {
    //     for (var j = 0; j < 5; j++) {
    //         // 在两边就加'a' 否则就加空格
    //         if (j === 0 || j === 4) {
    //             str += 'a';
    //         } else {
    //             str += ' ';
    //         }
    //     }
    // }

    for (var j = 0; j < 5; j++) {
        // 在四周就加'a' 否则就加空格
        if (j === 0 || j === 4 || i === 0 || i === 4) {
            str += 'a';
        } else {
            str += ' ';
        }
    }

    // 不是最后一轮 就加换行符
    if (i !== 4) {
        str += '\n';
    }
}
console.log(str);

// 6. 输入行数r，列数c，使用一次console输出以下效果
var r = +prompt('行数');
var c = +prompt('列数');
if (r < 3 || c < 3) {
    alert('有问题');
} else {
    var str = '';
    for (var i = 0; i < r; i++) {
        // 第一轮期待得到: 'aaaaa' + '\n
        // 第二轮期待得到: 'a   a' + '\n
        // 第三轮期待得到: 'a   a' + '\n
        // 第四轮期待得到: 'a   a' + '\n
        // 第五轮期待得到: 'aaaaa' + '\n

        for (var j = 0; j < c; j++) {  // c
            // 在四周就加'a' 否则就加空格
            if (j === 0 || j === c - 1 || i === 0 || i === r - 1) {
                str += 'a';
            } else {
                str += ' ';
            }
        }

        // 不是最后一轮 就加换行符
        if (i !== r - 1) {
            str += '\n';
        }
    }
    console.log(str);
}

// 7. 99乘法表
var str = '';
// 循环9行
for (var i = 1; i <= 9; i++) {
    // i: 1-9
    // 第九轮: i: 9
    // 期待: '9*1=9 ... ... 9*9=81'
    for (var j = 1; j <= i; j++) {
        // j: 1-9
        // var equation = i + '*' + j + '=' + i * j; // 字符串拼接(旧) es5
        str += `${i}*${j}=${i * j} `; // 字符串拼接(新) ECMAScript 6+
    }

    if (i !== 9) {
        str += '\n';
    }
}
console.log(str);

// 8. 输入数字个数，输出字符串
// 如
// 输入5   输出'01234'
// 输入12  输出'012340123401'
// 输入19  输出'0123401234012340123'
// 输入2   输出'01'
var count = +prompt('输入数字个数');
var str = '';

// 输入5   输出'01234'
// 输入12  输出'012340123401'
for (var i = 0; i < count; i++) {
    // i: 11 >>> 1
    // i: 5 >>> 0
    // i: 6 >>> 1
    // i: 7 >>> 2
    str += i % 5;
}

console.log(str);

// 8. 输入数字个数，输出字符串
// 如
// 输入5   输出'01234'
// 输入12  输出'01234-01234-01'
// 输入19  输出'01234-01234-01234-0123'
// 输入2   输出'01'
var count = +prompt('输入数字个数');
var str = '';

for (var i = 0; i < count; i++) {
    // 第二轮 刚开始
    // i: 5 >>> 0
    // i: 10 >>> 0
    // i: 15 >>> 0
    if (i % 5 === 0 && i !== 0) {
        str += '-';
    }
    str += i % 5;
}

console.log(str);

// 10. 输入数字个数，计算以下算是的结果

// 提示: 3的倍数的数字时特殊处理
// 如
// 输入: 10
// 计算: 1 + 2 - 3 + 4 + 5 - 6 + 7 + 8 - 9 + 10 的结果
// 输入: 2
// 计算: 1 + 2 的结果
// 输入: 6
// 计算: 1 + 2 - 3 + 4 + 5 - 6 的结果

var sum = 0;
var equation = '';
for (var i = 1; i <= 10; i++) {
    // 1-10
    if (i % 3 === 0) {
        sum -= i;
        equation += `- ${i} `;
    } else {
        sum += i;
        // if (i === 1) {
        //     equation += `1 `;
        // } else {
        //     equation += `+ ${i} `;
        // }
        equation += i === 1 ? `1 ` : `+ ${i} `;
    }
}
console.log(sum);
console.log(`${equation}= ${sum}`);
