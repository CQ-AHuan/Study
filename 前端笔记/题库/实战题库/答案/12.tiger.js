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
                children: [
                    {
                        label: '标题1.2.1',
                        id: '1-2-1',
                    },
                    {
                        label: '标题1.2.2',
                        id: '1-2-2',
                    },
                ],
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

// 输入id找对应的对象
function findChildren(inp, id) {
    // 找第一层
    for (const item of inp) {
        if (item.id === id) {
            return (item.children || []).map(child => child.label);
        }
    }
    // 把所有的children拿出来找
    // 期待: [
    //     {
    //         label: '标题1.1',
    //         id: '1-1',
    //     },
    //     {
    //         label: '标题1.2',
    //         id: '1-2',
    //     },

    //     {
    //         label: '标题2.1',
    //         id: '2-1',
    //         children: [
    //             {
    //                 label: '标题2.1.1',
    //                 id: '2-1-1',
    //             },
    //         ],
    //     },
    // ]
    return findChildren(inp.map(item => item.children || []).flat(), id);
}

console.log(findChildren(input, '2-1')); // ['标题2.1.1']
console.log(findChildren(input, '1')); // ['标题1.1', '标题1.2']
console.log(findChildren(input, '1-2')); // ['标题1.2.1', '标题1.2.2']
