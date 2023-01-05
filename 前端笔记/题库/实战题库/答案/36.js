// 数组归类
const input = [
    'sz000001',
    'sz000002',
    'sh600001',
    'sh600002',
    'sh600003',
];

const output = {
    sz: ['000001', '000002'],
    sh: ['600001', '600002', '600003'],
};

// 1.
function transform(input) {
    const res = {};
    for (const item of input) {
        // item: 'sz000001'
        // 'sz': 0, 2
        // '000001': 2, Infinity
        const prefix = item.substring(0, 2); // 'sz'
        const id = item.substring(2); // '000001'
        if (!res[prefix]) {
            res[prefix] = [];
        }
        res[prefix].push(id);
    }
    return res;
}

// 2.
function transform(input) {
    return input.reduce((res, item) => {
        const prefix = item.substring(0, 2); // 'sz'
        const id = item.substring(2); // '000001'
        if (!res[prefix]) {
            res[prefix] = [];
        }
        res[prefix].push(id);
        return res;
    }, {});
}