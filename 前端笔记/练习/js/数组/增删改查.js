// 新增
// 1. 生成一个从1开始的50项的奇数数组
var odds = [];
for (var i = 1; odds.length < 50; i += 2) {
    // i: 1, 3, 5, ...
    odds.push(i);
}
console.log(odds.length);

// 2. 生成一个10项的数组, 如[1, 2, 4, 8, ...]
var arr = [];
for (var i = 0; i < 10; i++) {
    arr.push(2 ** i);
}
console.log(arr);
// 注: 2的3次方: 2 ** 3

// 删除
// 1. 从已有数组中删除所有的假值项
var arr = [1, 2, 0, 'a', '', 5, undefined, 100, null, 'hello'];
// [1, 2, 'a', '', 5, undefined, 100, null, 'hello'];
for (var i = 0; i < arr.length; i++) {
    // 当前项
    // 1.1
    if (!arr[i]) {
        arr.splice(i, 1);
        i--;
    }

    // 1.2
    // while (!arr[i]) {
    //     arr.splice(i, 1);
    // }
}
console.log(arr);

// 2. 从已有数组中删除所有的数字, 并放入新数组中
var arr = [1, 2, 0, 'a', '', 5, undefined, 100, null, 'hello'];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        // 2.1
        var items = arr.splice(i, 1);
        newArr.push(items[0]);
        // 2.2
        // newArr.push(arr.splice(i, 1)[0]);
        // 2.3
        // newArr.push(arr[i]);
        // arr.splice(i, 1);

        i--;
    }
}
console.log(newArr, arr);

// 3. 从已有数组中删除所有的字符串, 并将所有删除的字符串拼接在一起
var arr = [1, 2, 'h', 3, 'e', 4, 'l', 'l', null, 'o'];
var str = '';
for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        str += arr[i];
        arr.splice(i, 1);
        i--;
    }
}
console.log(str);

// 修改
// 1. 将arr中所有的1更换为0
var arr = [0, 1, 1, 0, 1, 0, 0, 1];
for (var i = 0; i < arr.length; i++) {
    // arr[i]
    if (arr[i] === 1) {
        arr[i] = 0;
    }
}

// 2. 将arr中每组数字求和 将arr变为[10, 6, 25]
var arr = [
    [1, 2, 3, 4],
    [1, 2, 3],
    [8, 8, 9],
];
for (var i = 0; i < arr.length; i++) {
    // 第一轮: subArr为[1, 2, 3, 4]
    // 期待将subArr求和
    var subArr = arr[i]; // [1, 2, 3, 4]
    var sum = 0;
    for (var j = 0; j < subArr.length; j++) {
        // subArr[j] // 1, 2, 3, 4
        sum += subArr[j];
    }
    // 此时sum为10
    arr[i] = sum;
}
console.log(arr);

// 3. 将arr中的内容进行拼接
var arr = [
    ['张三', 18], // ts中的元组
    ['李四', 21],
    ['王五', 31],
];
// 将arr变为['张三18岁', '李四21岁', '王五31岁']
for (var i = 0; i < arr.length; i++) {
    // arr[i]: ['张三', 18]
    arr[i] = `${ arr[i][0] + arr[i][1] }岁`;
}
console.log(arr);
