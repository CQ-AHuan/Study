// 输入: nums: [2, 7, 11, 15]  target: 9
// 输出: [0, 1]

function twoSum(nums, target) {
    // nums: [2, 7, 11, 15]
    // target: 9
    // 期待: 如果 n1 + n2 === target  返回[n1的索引, n2的索引]
    for (var i = 0; i < nums.length - 1; i++) {
        // n1: nums[i] 2, 7, 11, 15
        var n1 = nums[i];
        // n1的索引为0时:
        // 期待循环n2的索引: 1, 2, 3

        // n1的索引为1时:
        // 期待循环n2的索引: 2, 3

        // n1的索引为2时:
        // 期待循环n2的索引: 3

        for (var j = i + 1; j < nums.length; j++) {
            var n2 = nums[j];
            if (n1 + n2 === target) {
                return [i, j];
            }
        }
    }
}

console.log( twoSum([2, 11, 15, 7], 9) ); // [0, 3]
console.log( twoSum([3, 2, 4], 6) ); // [1, 2]
console.log( twoSum([3, 3], 6) ); // [0, 1]
