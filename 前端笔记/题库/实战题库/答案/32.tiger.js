// <数组&对象练习>将店铺数组最近一个月的订单量从大到小排序
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
                // 时间戳
                timestamp: 1670161228017,
            },
            {
                userCount: 1,
                total: 89,
                score: 4.5,
                timestamp: 1670161228017,
            },
            {
                userCount: 4,
                total: 188,
                score: undefined,
                timestamp: 1670161228017,
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
                timestamp: 1642399957082,
            },
            {
                userCount: 1,
                total: 15,
                score: undefined,
                timestamp: 1670161228017,
            },
            {
                userCount: 2,
                total: 28,
                score: undefined,
                timestamp: 1642399957082,
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
                timestamp: 1670161228017,
            },
            {
                userCount: 1,
                total: 24,
                score: undefined,
                timestamp: 1670161228017,
            },
            {
                userCount: 1,
                total: 33,
                score: 4,
                timestamp: 1642399957082,
            },
        ],
    },
];

// 最近一个月的订单量
function getOrderCountLastMonth(orders) {
    const now = Date.now(); // 此刻的时间戳
    const month = 1000 * 60 * 60 * 24 * 30; // 一个月的毫秒数
    return orders.filter(o => o.timestamp > now - month).length;
}

function sort(input) {
    return input.sort((a, b) => getOrderCountLastMonth(b.orders) - getOrderCountLastMonth(a.orders));
}

console.log( sort(input) );
