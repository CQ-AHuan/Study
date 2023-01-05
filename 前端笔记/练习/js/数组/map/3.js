// 3. 封装一个函数, 传入一个数组, 返回一个所示新数组
const input = [
    { name: '张三', age: 18 }, // >>> '张三的年龄是18'
    { name: '李四', age: 19 },
    { name: '王五', age: 20 },
    { name: '赵六', age: 21 },
];

function getNames(arr) {
    return arr.map(item => `${ item.name }的年龄是${ item.age }`);
}

console.log( getNames(input) ); // ['张三的年龄是18', '李四的年龄是19', '王五的年龄是20', '赵六的年龄是21']