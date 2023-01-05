// 6. 封装一个函数, 传入一个数组, 返回一个所示新数组
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

function getAvg(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item.age;
    }
    return sum / arr.length;
}

function getKidsAvgAge(arr) {
    // item: { name: '张三', age: 18, children: ... }
    // item >>> 1.5
    return arr.map(item => getAvg(item.children));
}

console.log( getKidsAvgAge(input) ); // [1.5, 1.5]
