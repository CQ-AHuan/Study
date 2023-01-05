var info = {
    name: 'zhangsan',
    age: 18,
    tel: 13012341234,
};
// 1. 依次打印'name:zhangsan', 'age:18', 'tel:13012341234'
for (var key in info) {
    // 第一轮期待得到: 'name:zhangsan'
    console.log(`${key}:${info[key]}`);
}

// 2. 生成字符串'name:zhangsan,age:18,tel:13012341234'
var str = '';
for (var key in info) {
    // 第一轮期待得到: 'name:zhangsan'
    // 2.1
    // if (!str) {
    //     str += `${key}:${info[key]}`;
    // } else {
    //     str += `,${key}:${info[key]}`;
    // }
    // 2.2
    // 第一轮不用加逗号  之后都加
    str += `${str ? ',' : ''}${key}:${info[key]}`;
}
console.log(str);

// 3. 使用info对象生成如下数组
// [
//     ['name', 'zhangsan'],
//     ['age', 18],
//     ['tel', 13012341234],
// ]
var res = [];
for (var key in info) {
    // 第一轮期待得到: ['name', 'zhangsan']
    var item = [key, info[key]];
    res.push(item);
}
console.log(res);
