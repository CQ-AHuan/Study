// 4. 封装一个函数, 传入一个数组, 返回一个所示新数组
const input = [
    {
        name: '张三',
        age: 18,
        children: [ // >>> ['张三的儿子', '张三的女儿']
            { name: '张三的儿子', age: 1 }, // >>> '张三的儿子'
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

function getKids(arr) {
    return arr.map(item => item.children.map(c => c.name));
}

console.log( getKids(input) ); // [['张三的儿子', '张三的女儿'], ['李四的儿子', '李四的女儿']]
