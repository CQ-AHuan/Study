// <封装函数>转换数组

// 输入
const input = {
    shengjian: '生煎',
    baozi: '灌汤包',
    jiaozi: '水饺',
    burger: '汉堡',
};

// 期待输出
const output = [
    {
        label: '生煎',
        value: 'shengjian',
    },
    {
        label: '灌汤包',
        value: 'baozi',
    },
    {
        label: '水饺',
        value: 'jiaozi',
    },
    {
        label: '汉堡',
        value: 'burger',
    },
];

// 1.
function transform(obj) {
    const res = [];
    for (const key in obj) {
        // '生煎': obj[key]
        // 'shengjian': key
        res.push({
            label: obj[key],
            value: key,
        });
    }
    return xxx;
}

// 2. 推荐
function transform(obj) {
    return Object.keys(obj).map(key => ({
        label: obj[key],
        value: key,
    }));
}
