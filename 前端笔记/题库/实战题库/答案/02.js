// tiger: <封装函数>转换数组

// 输入
const input = [
    {
        label: '标题一',
        id: '1',
        parentId: null,
    },
    {
        label: '标题二',
        id: '2',
        parentId: null,
    },
    {
        label: '标题3.1',
        id: '3-1',
        parentId: '3',
    },
    {
        label: '标题3.1.1',
        id: '3-1-1',
        parentId: '3-1',
    },
    {
        label: '标题三',
        id: '3',
        parentId: null,
    },
    {
        label: '标题1.1',
        id: '1-1',
        parentId: '1',
    },
    {
        label: '标题1.2',
        id: '1-2',
        parentId: '1',
    },
    {
        label: '标题2.1',
        id: '2-1',
        parentId: '2',
    },
];

// 期待输出
const output = [
    {
        label: '标题一',
        id: '1',
        parentId: null,
        children: [
            {
                label: '标题1.1',
                id: '1-1',
                parentId: '1',
            },
            {
                label: '标题1.2',
                id: '1-2',
                parentId: '1',
            },
        ],
    },
    {
        label: '标题二',
        id: '2',
        parentId: null,
        children: [
            {
                label: '标题2.1',
                id: '2-1',
                parentId: '2',
            },
        ],
    },
    {
        label: '标题三',
        id: '3',
        parentId: null,
        children: [
            {
                label: '标题3.1',
                id: '3-1',
                parentId: '3',
                children: [
                    {
                        label: '标题3.1.1',
                        id: '3-1-1',
                        parentId: '3-1',
                    },
                ],
            },
        ],
    },
];

function transform(arr, parentId) {
    return arr
        .filter(item => item.parentId === parentId)
        .map(item => ({
            ...item,
            children: transform(arr, item.id),
        }));
}

console.log(transform(input, null));
