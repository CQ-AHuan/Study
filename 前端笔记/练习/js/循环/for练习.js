// 1. 打印100以内的偶数 包含0和100
for (var i = 0; i <= 100; i += 2) {
    console.log(i);
}

for (var i = 0; i <= 100; i++) {
    // 0-100的所有数字
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 2. 求100内的奇数和/偶数和 包含100

var oddSum = 0; // 奇数和
var evenSum = 0; // 偶数和
for (var i = 0; i < 101; i++) {
    if (i % 2 === 1) {
        // i: 1, 3, 5, ...
        oddSum += i;
    } else {
        // i: 2, 4, 6, ...
        evenSum += i;
    }
}

/**
 * 3. 输入数字的个数
 *  如:
 *      输入5: 打印'ababa'
 *      输入8: 打印'abababab'
 *      输入2: 打印'ab'
 *      输入1: 打印'a'
 *      输入0: 打印''
 */

var count = +prompt('输入数字的个数');
var str = '';
for (var i = 0; i < count; i++) {
    // 当i为偶数时 往str上面+a
    // 当i为奇数时 往str上面+b
    if (i % 2 === 0) {
        str += 'a';
    } else {
        str += 'b';
    }
}

/**
 * 4. 输入数字的个数
 *  如:
 *      输入5:  打印'abcab'
 *      输入9:  打印'abcabcabc'
 *      输入2:  打印'ab'
 *      输入1:  打印'a'
 *      输入0:  打印''
 *      输入11: 打印'abcabcabcab'
 */

var count = +prompt('输入数字的个数');
var str = '';
for (var i = 0; i < count; i++) {
    // 当i % 3 === 0时 往str上面+a
    // 当i % 3 === 1时 往str上面+b
    // 当i % 3 === 2时 往str上面+c
    switch (i % 3) {
        case 0:
            str += 'a';
            break;
        case 1:
            str += 'b';
            break;
        case 2:
            str += 'c';
            break;

        default:
            break;
    }
}
console.log(str);

// 5. 1-170中偶数的平均值
// 5.1 累计和
// 5.2 累计个数
var sum = 0;
var count = 0;
for (var i = 2; i <= 170; i += 2) {
    sum += i;
    count++;
}

console.log(sum / count);

/**
 * 6. 输入一个小于10大于0的数字 不包括10和0(否则打印数字不符合规范)
 *  如:
 *      输入: 9  打印: '987654321'
 *      输入: 3  打印: '321'
 *      输入: 1  打印: '1'
 */

var num = +prompt('输入一个数字'); // 3
if (num > 9 || num < 1) {
    console.log('不符合规范')
} else {
    // 3, 2, 1
    var str = '';
    for (var i = num; i > 0; i--) {
        str += i;
    }
    console.log(str);
}


// 7. 依次打印'a99', 'a98', ... 'a1', 'a0'
