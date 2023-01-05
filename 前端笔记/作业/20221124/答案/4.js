// 封装一个函数，输入一个数组，返回children长度最大的那一项的name
function getName(arr) {
    // 找长度最大的那一项
    var longestItem = { children: [] };
    for (var item of arr) {
        // item: { name: 'zs', children: [...] }
        if (item.children.length > longestItem.children.length) {
            longestItem = item;
        }
    }

    return longestItem.name;
}

var arr = [
    {
        name: 'zs',
        children: [
            { name: 'zs1' },
            { name: 'zs2' },
            { name: 'zs3' },
        ],
    },
    {
        name: 'ls',
        children: [
            { name: 'ls1' },
        ],
    },
    {
        name: 'ww',
        children: [],
    },
];
console.log( getName(arr) ); // 'zs'