// 数组去重
Array.prototype.unique = function () {
    // todo
}

const arr = [
    { name: 'zs' },
    { name: 'zs' },
    { name: 'ls' },
    { name: 'ww' },
];

console.log( arr.unique() ); // [{ name: 'zs' }, { name: 'ls' }, { name: 'ww' }]

const arr1 = [
    { name: 'zs', children: [{ name: 'zs1' }] },
    { name: 'zs', children: [{ name: 'zs1' }] },
    { name: 'ls' },
    { name: 'ww' },
];

console.log( arr1.unique() ); // [{ name: 'zs', children: [{ name: 'zs1' }] }, { name: 'ls' }, { name: 'ww' }]
