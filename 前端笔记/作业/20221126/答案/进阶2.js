// 输入: nums: [2, 7, 11, 15]  target: 9
// 输出: [0, 1]

function twoSum(nums, target) {
    // nums: [2, 7, 11, 15]
    // target: 9
    var mapping = {
        // 2: 0
    };
    // 期待:
    for (var i = 0; i < nums.length; i++) {
        var n = nums[i]; // 2, 7, 11, 15
        // n1为7时: 找2的索引
        // 期待的信息: 有2还有索引
        var expect = target - n;
        if (expect in mapping) {
            return [mapping[expect], i];
        }
        mapping[n1] = i;
    }
}

console.log( twoSum([2, 11, 15, 7], 9) ); // [0, 3]
console.log( twoSum([3, 2, 4], 6) ); // [1, 2]
console.log( twoSum([3, 3], 6) ); // [0, 1]
