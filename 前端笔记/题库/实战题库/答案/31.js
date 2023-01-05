// 将店铺数组按平均得分从大到小排序
const input = [
    {
        name: '川哥大碗面',
        // order: 订单
        orders: [
            {
                // 用餐人数
                userCount: 3,
                // 订单消费
                total: 151,
                // 订单分数 不评分默认5分
                score: 4,
            },
            {
                userCount: 1,
                total: 89,
                score: 4.5,
            },
            {
                userCount: 4,
                total: 188,
                score: undefined,
            },
        ],
    },
    {
        name: '贵哥羊肉粉',
        orders: [
            {
                userCount: 2,
                total: 34,
                score: undefined,
            },
            {
                userCount: 1,
                total: 15,
                score: undefined,
            },
            {
                userCount: 2,
                total: 28,
                score: undefined,
            },
        ],
    },
    {
        name: '俊哥黄焖鸡',
        orders: [
            {
                userCount: 3,
                total: 98,
                score: 5,
            },
            {
                userCount: 1,
                total: 24,
                score: undefined,
            },
            {
                userCount: 1,
                total: 33,
                score: 4,
            },
        ],
    },
];

// 1.
function getAvg(orders) {
    let sum = 0;
    for (const order of orders) {
        // order: { ... , score: 4 }
        sum += order.score !== undefined ? order.score : 5;
    }
    return sum / orders.length;
}

// 2.
function getAvg(orders) {
    return orders.reduce((sum, order) => sum + (order.score !== undefined ? order.score : 5), 0) / orders.length;
}

function sort(input) {
    // to do
    return input.sort((a, b) => getAvg(b.orders) - getAvg(a.orders));
}
