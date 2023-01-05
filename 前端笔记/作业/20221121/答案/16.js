// 16.已知对象, 求zhangsan所有孩子年龄的平均值
// 如:
var zs = {
    name: 'zhangsan',
    age: 88,
    children: [
        {
            name: 'lisi',
            age: 50,
        },
        {
            name: 'wangwu',
            age: 51,
        },
        {
            name: 'liuliu',
            age: 52,
        },
    ],
};

var sum = 0;
for (var child of zs.children) {
    // child: { name: 'lisi', age: 50 }
    sum += child.age;
}
console.log(sum / zs.children.length);