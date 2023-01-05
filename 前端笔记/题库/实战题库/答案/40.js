// <数组练习>根据value值找到对应的label
const input = [
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
function getLabel(input, value) {
    const finded = input.find(item => value === item.value);
    return !finded ? null : finded.label;
}

// 2. 推荐
function getLabel(input, value) {
    return input.find(item => value === item.value)?.label || null;
}


console.log(getLabel(input, 'shengjian')); // '生煎'
console.log(getLabel(input, 'baozi')); // '灌汤包'
console.log(getLabel(input, 'xixi')); // null
