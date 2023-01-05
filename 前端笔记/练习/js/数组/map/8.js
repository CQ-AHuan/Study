// 8. 封装一个函数, 传入一个数组, 返回一个所示新数组
const input = [
    {
        name: '张三',
        age: 18,
        children: [
            { name: '张三的儿子', age: 1 },
            { name: '张三的女儿', age: 2 },
        ],
    },
    {
        name: '李四',
        age: 19,
        children: [
            { name: '李四的儿子', age: 1 },
            { name: '李四的女儿', age: 3 },
        ],
    },
];

function getKidsMaxAge(arr) {
    // 期待3: [1, 2, 1, 3]
    // 期待2: [
    //      { name: '张三的儿子', age: 1 },
    //      { name: '张三的女儿', age: 2 },
    //      { name: '李四的儿子', age: 1 },
    //      { name: '李四的女儿', age: 3 },
    // ]
    // 期待1: [
    //      [{ name: '张三的儿子', age: 1 }, { name: '张三的女儿', age: 2 }],
    //      [{ name: '李四的儿子', age: 1 }, { name: '李四的女儿', age: 3 }],
    // ]

    // 链式操作
    const ageList = arr
        .map(item => item.children) // 期待1
        .flat(Infinity)             // 期待2
        .map(item => item.age);     // 期待3
    return Math.max(...ageList);
}

console.log( getKidsMaxAge(input) ); // 3
