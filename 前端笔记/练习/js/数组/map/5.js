// 5. 封装一个函数, 传入一个数组, 返回一个所示新数组
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
            { name: '李四的女儿', age: 2 },
        ],
    },
];

// 没学flat之前
function getKids(arr) {
    //  [
    //      ['张三的儿子', '张三的女儿'],
    //      ['李四的儿子', '李四的女儿'],
    //  ]
    const childrens = arr.map(item => item.children.map(c => c.name));
    const res = [];
    for (const children of childrens) {
        // children: ['张三的儿子', '张三的女儿']
        res.push(...children);
    }
    return res;
}

// 学了flat之后
function getKids(arr) {
    //  [
    //      ['张三的儿子', '张三的女儿'],
    //      ['李四的儿子', '李四的女儿'],
    //  ]
    return arr.map(item => item.children.map(c => c.name)).flat(Infinity);
}

console.log( getKids(input) ); // ['张三的儿子', '张三的女儿', '李四的儿子', '李四的女儿']
