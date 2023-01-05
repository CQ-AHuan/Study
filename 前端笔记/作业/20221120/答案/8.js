// 找到规律，通过两个已知数组，生成新数组
// // 案例1: 已知数组
// var nums1 = [1, 2, 3, 4, 5];
// var nums2 = [3, 2, 2, 6, 9, 10, 99];

// // 案例1: 期待得到的数组
// var result = [3, 4, 6, 24, 45];

// // 案例2: 已知数组
// var nums1 = [4, 2, 8, 5, 7];
// var nums2 = [3, 2, 2, 6, 9];

// // 案例2: 期待得到的数组
// var result = [12, 4, 16, 30, 63];

var nums1 = [1, 2, 3, 4, 5];
var nums2 = [3, 2, 2, 6];

// 选择较短的数组
var len = nums1.length < nums2.length ? nums1.length : nums2.length;
var res = [];

for (var i = 0; i < len; i++) {
    // 共用索引
    var n1 = nums1[i];
    var n2 = nums2[i];
    res.push(n1 * n2);
}
console.log(res);