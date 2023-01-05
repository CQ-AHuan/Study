// 封装一个函数，输入一个数组，依次打印所有name
function log(arr) {
    for (var item of arr) {
        console.log(item.name);
        item.children && log(item.children);
        // log(item.children || []);
    }
}

var arr = [
    {
        name: 'zs',
    },
    {
        name: 'ls',
        children: [
            {
                name: 'ls1',
                children: [
                    {
                        name: 'ls12',
                    },
                ],
            },
            {
                name: 'ls2',
            },
        ],
    },
    {
        name: 'ww',
        children: [
            {
                name: 'ww1',
            },
        ],
    },
];

log(arr); // 依次打印所有name: 'zs', 'ls', 'ls1', ...