// <对象(映射)&数组练习>转换数组

// 已知条件
// const mapping = {
//     shengjian: '生煎',
//     baozi: '灌汤包',
//     jiaozi: '水饺',
//     burger: '汉堡',
// };
const mapping = {
    生煎: 'shengjian',
    灌汤包: 'baozi',
    水饺: 'jiaozi',
    汉堡: 'burger',
};

// 输入
const input = [
    {
        label: 'shengjian',
        value: 'shengjian',
    },
    {
        label: 'baozi',
        value: 'baozi',
    },
    {
        label: 'jiaozi',
        value: 'jiaozi',
    },
    {
        label: 'burger',
        value: 'burger',
    },
];

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
function transform(input, mapping) {
    // 反转mapping
    const reversedMapping = {};
    for (const key in mapping) {
        // key: '生煎'
        // mapping[key]: 'shengjian'
        reversedMapping[mapping[key]] = key;
    }

    return input.map(item => ({
        ...item,
        label: reversedMapping[item.label],
    }));
}

// 2.
function getValue(mapping, input) {
    // input: 'shengjian'
    // 期待: '生煎'
    for (const key in mapping) {
        // key: '生煎'
        // mapping[key]: 'shengjian'
        if (mapping[key] === input) {
            return key;
        }
    }
}

function transform(input, mapping) {
    // 已知mapping, 通过'shengjian' 获取 '生煎'
    // getValue(mapping, 'shengjian') >>> '生煎'
    return input.map(item => ({
        ...item,
        label: getValue(mapping, item.label), // 输入: 'shengjian' 输出: '生煎'
    }));
}
