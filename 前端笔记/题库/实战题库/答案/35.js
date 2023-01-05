// 数组归类
const input = [
    {
        id: '000001',
        exchange: 'sz', // 交易所
    },
    {
        id: '000002',
        exchange: 'sz',
    },
    {
        id: '600001',
        exchange: 'sh',
    },
    {
        id: '600002',
        exchange: 'sh',
    },
    {
        id: '600003',
        exchange: 'sh',
    },
];

const output = {
    sz: ['000001', '000002'],
    sh: ['600001', '600002', '600003'],
};

// 1.
function transform(input) {
    const res = {};
    for (const { id, exchange } of input) {
        // id: '000001'
        // exchange: 'sz'
        if (!res[exchange]) {
            res[exchange] = [];
        }
        res[exchange].push(id);
    }
    return res;
}

// 2.
function transform(input) {
    return input.reduce((res, { id, exchange }) => {
        if (!res[exchange]) {
            res[exchange] = [];
        }
        res[exchange].push(id);
        return res;
    }, {});
}

console.log( transform(input) );
