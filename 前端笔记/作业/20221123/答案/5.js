// 5. 封装一个函数，输入所示数组和限制条件，返回筛选过后的数组
function filter(arr, standard) {
    var res = [];
    for (var item of arr) {
        // item: { name: 'zs', score: 59 }
        if (item.score > standard) {
            res.push(item.name);
        }
    }
    return res;
}
var students = [
  { name: 'zs', score: 59 },
  { name: 'ls', score: 69 },
  { name: 'ww', score: 79 },
  { name: 'll', score: 89 },
];

// 筛选大于60分的同学
console.log( filter(students, 60) ); // ['ls', 'ww', 'll']
// 筛选大于80分的同学
console.log( filter(students, 80) ); // ['ll']