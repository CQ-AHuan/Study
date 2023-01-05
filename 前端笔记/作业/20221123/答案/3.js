// 3. 封装一个函数, 输入两个数组, 返回两个数组的交集
function getIntersection(arr1, arr2) {
    var res = [];
    for (var item2 of arr2) {
        // item2: 2, 3, 4
        // arr1中有没有item2
        for (var item1 of arr1) {
            // item1: 1, 2, 3
            if (item1 === item2) {
                res.push(item2);
            }
        }
    }
    return res;
}

console.log(getIntersection([1, 2, 3], [2, 3, 4])); // [2, 3]
console.log(getIntersection([1, 2, 3], [4, 5, 6])); // []