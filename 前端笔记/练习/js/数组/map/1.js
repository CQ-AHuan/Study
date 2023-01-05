// 1. 封装一个函数, 传入一个数组, 返回一个新数组, 新数组中的每个元素是原数组中的元素的平方
function square(arr) {
    return arr.map(item => item ** 2);
}

console.log( square([1, 2, 3, 4, 5]) ); // [1, 4, 9, 16, 25]
