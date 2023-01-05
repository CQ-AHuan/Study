// 已知两个等长数组, 将他们合并为一个新对象
var arr1 = ['张三', '李四', '王五'];
var arr2 = [89, 90, 78];
// 输出: { 张三: 89, 李四: 90, 王五: 78 }

var res = {};
for (var i = 0; i < arr1.length; i++) {
    // 期待: '张三', 89
    var key = arr1[i]; // '张三'
    var value = arr2[i]; // 89
    res[key] = value;
}
console.log(res);
