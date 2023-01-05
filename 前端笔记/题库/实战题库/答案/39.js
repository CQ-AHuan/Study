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
    zhangsan: {
        starCount: 22,
        commentCount: 2,
    },
    lisi: {
        starCount: 221,
        commentCount: 2,
    },
    wangwu: {
        starCount: 6,
        commentCount: 1,
    },
};

// 1.
function getTotal(input) {
    const res = {};
    for (const { username, starCount } of input) {
        // username: 'zhangsan'
        // starCount: 10
        if (!res[username]) {
            res[username] = {
                starCount: 0, // 点赞数之和
                commentCount: 0, // 评论数
            };
        }
        res[username].starCount += starCount;
        res[username].commentCount++;
    }
    return res;
}

// 2.
function getTotal(input) {
    return input.reduce((res, { username, starCount }) => {
        if (!res[username]) {
            res[username] = {
                starCount: 0, // 点赞数之和
                commentCount: 0, // 评论数
            };
        }
        res[username].starCount += starCount;
        res[username].commentCount++;
        return res;
    }, {});
}
