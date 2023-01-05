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
    starCount: {
        zhangsan: 22,
        lisi: 221,
        wangwu: 6,
    },
    commentCount: {
        zhangsan: 2,
        lisi: 2,
        wangwu: 1,
    },
};

// 1.
function getTotal(input) {
    const res = {
        starCount: {},
        commentCount: {},
    };
    for (const item of input) {
        if (!(item.username in res.starCount)) {
            res.starCount[item.username] = 0;
            res.commentCount[item.username] = 0;
        }
        res.starCount[item.username] += item.starCount;
        res.commentCount[item.username]++;
    }
    return res;
}

// 2.
function getTotal(input) {
    return input.reduce((res, item) => {
        if (!(item.username in res.starCount)) {
            res.starCount[item.username] = 0;
            res.commentCount[item.username] = 0;
        }
        res.starCount[item.username] += item.starCount;
        res.commentCount[item.username]++;
        return res;
    }, {
        starCount: {},
        commentCount: {},
    });
}

console.log( getTotal(input) );
