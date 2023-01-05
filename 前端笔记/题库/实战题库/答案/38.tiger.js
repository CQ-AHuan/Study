// 统计点赞数量
const input = [
    {
        username: 'zhangsan',
        starCount: 10,
        content: '感觉不会再爱了',
        timestamp: 1642579353575,
        replies: [
            {
                username: 'lisi',
                starCount: 3,
                content: '感觉不会再爱了',
                timestamp: 1642579354575,
                replies: [],
            },
            {
                username: 'wangwu',
                starCount: 3,
                content: '感觉不会再爱了',
                timestamp: 1642579355575,
                replies: [
                    {
                        username: 'liuliu',
                        starCount: 1,
                        content: '感觉不会再爱了',
                        timestamp: 1642579357575,
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        username: 'yuqi',
        starCount: 99,
        content: '感觉不会再爱了',
        timestamp: 1642579355575,
        replies: [
            {
                username: 'zhaoqi',
                starCount: 12,
                content: '感觉不会再爱了',
                timestamp: 1642579333575,
                replies: [],
            },
        ],
    },
];

const output = [
    {
        username: 'zhangsan',
        // 总点赞数
        totalStarCount: 17,
        // 评论数
        commentCount: 3,
        content: '感觉不会再爱了',
        timestamp: 1642579353575,
    },
    {
        username: 'yuqi',
        totalStarCount: 111,
        commentCount: 1,
        content: '感觉不会再爱了',
        timestamp: 1642579355575,
    },
];

// 1.
// function getStarCountSum(item) {
//     let sum = item.starCount;
//     for (const reply of item.replies) {
//         sum += getStarCountSum(reply);
//     }
//     return sum;
// }

// function getCommentCount(item) {
//     let count = 1;
//     for (const reply of item.replies) {
//         count += getCommentCount(reply);
//     }
//     return count;
// }

// function totalStar(input) {
//     return input.map(item => ({
//         username: item.username,
//         totalStarCount: getStarCountSum(item), // 求和
//         commentCount: getCommentCount(item) - 1, // 计数
//         conteng: item.content,
//         timestamp: item.timestamp,
//     }));
// }

// 2.
function getTotal(item) {
    let res = {
        totalStarCount: item.starCount,
        commentCount: item.replies.length,
    };
    for (const reply of item.replies) {
        res.totalStarCount += getTotal(reply).totalStarCount;
        res.commentCount += getTotal(reply).commentCount;
    }
    return res;
}

function totalStar(input) {
    return input.map(item => ({
        username: item.username,
        conteng: item.content,
        timestamp: item.timestamp,
        ...getTotal(item),
    }));
}

console.log(totalStar(input));
