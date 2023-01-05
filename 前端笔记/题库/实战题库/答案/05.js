// <对象(映射)&数组练习>转换数组
const mapping = {
    shengjian: '生煎',
    baozi: '灌汤包',
    jiaozi: '水饺',
    burger: '汉堡',
};

const input = [
    {
        label: '生煎',
        value: '生煎',
    },
    {
        label: '灌汤包',
        value: '灌汤包',
    },
    {
        label: '水饺',
        value: '水饺',
    },
    {
        label: '汉堡',
        value: '汉堡',
    },
];

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

function getValue(mapping, input) {
    // input: '生煎'
    // 期待: 'shengjian'
    // 1.
    // for (const key in mapping) {
    //     // key: 'shengjian'
    //     // mapping[key]: '生煎'
    //     if (mapping[key] === input) {
    //         return key;
    //     }
    // }

    // 2.
    // ['shengjian', 'baozi', ...]
    // k: 'shengjian'
    // mapping[k]: '生煎'
    return Object.keys(mapping).find(k => mapping[k] === input);
}

function transform(input, mapping) {
    return input.map(item => ({
        ...item,
        value: getValue(mapping, item.value), // 输入'生煎'  输出'shengjian'
    }));
}
