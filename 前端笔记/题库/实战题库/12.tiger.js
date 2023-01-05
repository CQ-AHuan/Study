// <封装函数>输入一个id, 返回这个id对应的最近一层的子节点的标题组成的数组

// 输入
const input = [
    {
        label: '标题一',
        id: '1',
        children: [
            {
                label: '标题1.1',
                id: '1-1',
            },
            {
                label: '标题1.2',
                id: '1-2',
            },

        ],
    },
    {
        label: '标题二',
        id: '2',
        children: [
            {
                label: '标题2.1',
                id: '2-1',
                children: [
                    {
                        label: '标题2.1.1',
                        id: '2-1-1',
                    },
                ],
            },
        ],
    },
    {
        label: '标题三',
        id: '3',
    },
];

function findChildren(id) {
    // todo
}

console.log(findChildren('2-1')); // ['标题2.1.1']
console.log(findChildren('1')); // ['标题1.1', '标题1.2']
