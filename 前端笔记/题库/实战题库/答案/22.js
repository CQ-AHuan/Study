//
const data = [
    {
        id: '1faa0e81', // 快递单号
        from: { // 发件人信息
            name: '张三',
            id: '1412908431238',
            phone: '13800138000',
            address: '北京市朝阳区望京soho',
        },
        to: { // 收件人信息
            name: '李四',
            id: '1412908431239',
            phone: '13800138001',
            address: '北京市海淀区西二旗',
        },
        timestamp: 1610000000000, // 时间戳
        status: 'pending', // 状态 pending在途中 resolved已签收 rejected拒签
        goodsType: 'food', // 类型 food食品 electronic电子
        price: 18,  // 价格
        type: '次日达', // 快递类型
    },
    {
        id: '1faa0e82',
        from: {
            name: '张武',
            id: '1412908431240',
            phone: '13800138002',
            address: '重庆市渝中区渝中路',
        },
        to: {
            name: '李六',
            id: '1412908431241',
            phone: '13800138003',
            address: '重庆市渝北区渝北路',
        },
        timestamp: 1610000123123,
        status: 'resolved',
        goodsType: 'electronics',
        price: 188,
        type: '次日达',
    },
    {
        id: '1faa0e83',
        from: {
            name: '赵信',
            id: '1412908431242',
            phone: '13800138004',
            address: '上海市浦东新区张江高科',
        },
        to: {
            name: '王9',
            id: '1412908431243',
            phone: '13800138005',
            address: '深圳市南山区科技园',
        },
        timestamp: 1610000123124,
        status: 'pending',
        goodsType: 'food',
        price: 18,
        type: '次日达',
    },
    {
        id: '1faa0e84',
        from: {
            name: '蛮王',
            id: '1412908431244',
            phone: '13800138006',
            address: '重庆市渝中区千与千寻小区',
        },
        to: {
            name: '艾希',
            id: '1412908431245',
            phone: '13800138007',
            address: '重庆市渝北区中央公园',
        },
        timestamp: 1610000123125,
        status: 'rejected',
        goodsType: 'flowers',
        price: 99,
        type: '隔日达',
    },
];

// 1. 找出所有food类型的订单
console.log( data.filter(d => d.goodsType === 'food') );

// 2. 找出所有次日达的订单
console.log( data.filter(d => d.type === '次日达') );

// 3. 找出所有次日达的food类型的订单
console.log( data.filter(d => d.type === '次日达' && d.goodsType === 'food') );

// 4. 找出所有次日达订单的平均价格
// 4.1
// let sum = 0;
// // 拿到所有次日达的订单
// const nextDayData = data.filter(d => d.type === '次日达');
// for (const d of nextDayData) {
//     sum += d.price;
// }
// console.log(sum / nextDayData.length);

// 4.2
const nextDayData = data.filter(d => d.type === '次日达');
const avg = nextDayData.reduce((sum, item) => sum + item.price, 0) / nextDayData.length;
console.log(avg);

// 5. 统计快递的拒签率(rejected为退回)
console.log( data.filter(d => d.status === 'rejected').length / data.length );

// 6. 找出所有在途中的订单(即pending状态的订单)
console.log( data.filter(d => d.status === 'padding') );

// 7. 统计所有的用户信息(放入一个数组中, 每个元素为一个对象, 包含name, id, phone, address)
// 7.1
const users = [];
for (const { from, to } of data) {
    // es5
    // const from = d.from;
    // const to = d.to;
    // es6
    // const { from, to } = d;
    // 去users中查找有没有和from.id相同的数组项
    if (!users.some(u => u.id === from.id)) {
        users.push(from);
    }
    if (!users.some(u => u.id === to.id)) {
        users.push(to);
    }
}
console.log(users);

// 7.2
console.log( data.reduce((res, { from, to }) => {
    if (!res.some(u => u.id === from.id)) {
        res.push(from);
    }
    if (!res.some(u => u.id === to.id)) {
        res.push(to);
    }
    return res;
}, []) );
