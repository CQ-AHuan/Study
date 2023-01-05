// <数组方法加强练习>求最大值
const input = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    [
        { value: 11 },
        { value: 22 },
        { value: 33 },
        [
            { value: 111 },
            { value: 222 },
        ],
    ],
];

const output = 222;

function getMax(input) {
    return Math.max(...input.flat(Infinity).map(item => item.value));
}

// 1. 实现flat
function flat(arr) {
    const res = [];
    for (const item of arr) {
        if (!Array.isArray(item)) {
        	res.push(item);
        } else {
        	res.push(...flat(item));
        }
    }
    return res;
}

function getMax(input) {
    return Math.max(...flat(input).map(item => item.value));
}

// 2. 手写
function getMax(input) {
    // 1, 2, 3, 11, 22, 33, ...
    let max = -Infinity;
    for (const item of input) {
        if (!Array.isArray(item)) {
            // item: { value: 1 }
            if (item.value > max) {
                max = item.value;
            }
        } else {
            // item: [{ value: 11 }, { value: 22 }]
            if (getMax(item) > max) {
                max = getMax(item);
            }
        }
    }
    return max;
}

console.log(getMax(input));
