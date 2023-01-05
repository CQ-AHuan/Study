// 1. 封装一个函数, 输入一个名字, 返回名字缩写
function getSimpleName(name) {
    // 期待: ['zhang', 'san']
    var str = '';
    for (var item of name.split(' ')) {
        // item: 'zhang'
        str += item[0];
    }
    return str;
}

console.log(getSimpleName('zhang san')); // zs
console.log(getSimpleName('li si')); // ls
console.log(getSimpleName('wang wu')); // ww

// 2. 封装一个函数, 输入一个整数, 返回该数字是否为回文数
// 回文数: 从左到右和从右到左读都是一样的数字
// 如: 12321, 123321, 1, 11, 121
// function isPalindrome(num) {
//     // num: 12321 >>> '12321'           5位数比2次
//     // num: 1234321 >>> '1234321'       7位数比3次
//     // num: 12344321 >>> '12344321'     8位数比4次
//     // num: 12344321 >>> '12344321'     n位数比Math.floor(n / 2)次
//     var str = String(num);
//     for (var i = 0; i < Math.floor(str.length / 2); i++) {
//         // 第一轮期待:
//         // 第一位数字: str[0]
//         // 最后一位数字: str[7]

//         // 第二轮期待:
//         // 第二位数字: str[1]
//         // 倒数第二位数字: str[6]

//         var n1 = str[i]; // 1
//         var n2 = str[str.length - 1 - i]; // 2
//         if (n1 !== n2) {
//             return false;
//         }
//     }
//     return true;
// }

function isPalindrome(num) {
    // num: 1234 >>> '1234'
    // reversedNum: '4321'
    var numStr = String(num);
    var reversedNum = '';
    for (var i = numStr.length - 1; i >= 0; i--) {
        // '4': numStr[i]
        reversedNum += numStr[i];
    }
    return reversedNum === numStr;
}

console.log(isPalindrome(12321)); // true
console.log(isPalindrome(123321)); // true
console.log(isPalindrome(1)); // true
console.log(isPalindrome(11)); // true
console.log(isPalindrome(1234)); // false

// 3. 封装一个函数, 输入时分秒, 返回秒数
// 如: 07:05:45, 返回 07 * 3600 + 05 * 60 + 45 = 25645
function getSeconds(time) {
    // 07 05 45
    // es5
    // var tmp = time.split(':'); // ['07', '05', '45']
    // var hours = tmp[0];
    // var minutes = tmp[1];
    // var seconds = tmp[2];

    // es6 数组解构赋值
    var [hours, minutes, seconds] = time.split(':');
    return hours * 3600 + minutes * 60 + seconds * 1;
}

console.log(getSeconds('07:05:45')); // 25545
console.log(getSeconds('00:00:00')); // 0
console.log(getSeconds('23:59:59')); // 86399

// 4. 封装一个函数, 输入所示数组, 返回所示数组
function transform(arr) {
    var res = [];
    for (var item of arr) {
        // 期待: '张三' '07:05:45' '黑马程序员办公室'
        // es5
        // var name = item.name;
        // var time = item.time;
        // var address = item.address;

        // es6
        var { name, time, address } = item;
        res.push(`${ name }在${ time }到达${ address }`);
    }
    return res;
}

var arr = [
    {
        name: '张三',
        time: '07:05:45',
        address: '黑马程序员办公室',
    },
    {
        name: '李四',
        time: '12:05:45',
        address: '黑马程序员楼下',
    },
    {
        name: '王五',
        time: '12:35:11',
        address: '农业银行',
    },
];

console.log(transform(arr));
// [
//    '张三在07:05:45到达黑马程序员办公室',
//    '李四在12:05:45到达黑马程序员楼下',
//    '王五在12:35:11到达农业银行',
// ]

var date = '2011-01-02';

// '2011'
console.log( date.substring(0, 4) ); // [0, 4)