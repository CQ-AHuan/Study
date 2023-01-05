// <封装函数>打印所有的标题

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

function logLabel(inp) {
    for (const item of inp) {
        console.log(item.label);
        // 如果有item.children, 以同样的方式打印item.children中的内容
        item.children && logLabel(item.children);
    }
}

logLabel(input);
