var nums = [1, 2, 9, 11, -1, 0, 'a', '', null];

// 1. 挑选出nums数组中的数字, 放入新数组
var res = [];
for (var i = 0; i < nums.length; i++) {
    // nums[i]: 1, 2, 9, ...
    if (typeof nums[i] === 'number') {
        res.push(nums[i]);
    }
}

// 2. 打印nums数组中是否有负数
// 假装没有负数
var hasNegative = false;
for (var i = 0; i < nums.length; i++) {
    // nums[i]: 1, 2, 9, ...
    if (nums[i] < 0) {
        console.log('有负数');
        hasNegative = true;
        break;
    }
}
if (!hasNegative) {
    console.log('没有负数');
}

// 3. 打印nums数组中是否每一项都是数字
var isAllNumber = true;
for (var i = 0; i < nums.length; i++) {
    // nums[i]: 1, 2, 9, ...
    if (typeof nums[i] !== 'number') {
        console.log('并不是每一项都是数字');
        isAllNumber = false;
        break;
    }
}
if (isAllNumber) {
    console.log('每一项都是数字');
}

// 4. 打印nums数组中第一个偶数
for (var i = 0; i < nums.length; i++) {
    // nums[i]: 1, 2, 9, ...
    if ((typeof nums[i] === 'number') && (nums[i] % 2 === 0)) {
        console.log(num[i]);
        break;
    }
}

// 5. 打印nums数组中第一个偶数的索引
for (var i = 0; i < nums.length; i++) {
    // nums[i]: 1, 2, 9, ...
    if ((typeof nums[i] === 'number') && (nums[i] % 2 === 0)) {
        console.log(i);
        break;
    }
}

// 6. 生成一个新数组, 形如: [1, 4, 81, 121, 1, 0, NaN, 0, 0]
var res = [];
for (var i = 0; i < nums.length; i++) {
    // nums[i]: 1, 2, 9, ...
    res.push(nums[i] ** 2);
}
console.log(res);
