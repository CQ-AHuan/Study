// 统计用户数据
const input = [
    {
        username: 'zhangsan',
        starCount: 10,
        content: '嘻嘻嘻',
    },
    {
        username: 'lisi',
        starCount: 122,
        content: '嘿嘿',
    },
    {
        username: 'lisi',
        starCount: 99,
        content: '呵呵',
    },
    {
        username: 'zhangsan',
        starCount: 12,
        content: '哈哈哈',
    },
    {
        username: 'wangwu',
        starCount: 6,
        content: '嗯嗯',
    },
];

const output = {
    zhangsan: [
        {
            starCount: 12,
            content: '哈哈哈',
        },
        {
            starCount: 10,
            content: '嘻嘻嘻',
        },
    ],
    lisi: [
        {
            starCount: 122,
            content: '嘿嘿',
        },
        {
            starCount: 99,
            content: '呵呵',
        },
    ],
    wangwu: [
        {
            starCount: 6,
            content: '嗯嗯',
        },
    ],
};

function getTotal(input) {

}
