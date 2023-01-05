function getNewArray(arr) {
    const res = [];
    for (const item of arr) {
        // item: 'zs:13012341234'
        // 期待: 'zs', '13012341234'
        // var tmp = item.split(':'); // tmp: ['zs', '13012341234']
        // var name = tmp[0];
        // var phone = tmp[1];

        // es6
        const [name, phone] = item.split(':');
        res.push({
            name,
            phone,
        });
    }
    return res;
}

const arr = [
    'zs:13012341234',
    'ls:13012341235',
    'ww:13012341326',
];

console.log( getNewArray(arr) );
// [
//     { name: 'zs', phone: '13012341234' },
//     { name: 'ls', phone: '13012341235' },
//     { name: 'ww', phone: '13012341326' },
// ]
