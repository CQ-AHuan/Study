function getValue(key) {
    switch(key) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
    }
}


// 使用对象维护映射关系
const mapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function romanToInt1(str) {
    let sum = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        const current = mapping[str[i]];
        const prev = mapping[str[i + 1]] || -Infinity;
        if (prev > current) {
            sum -= current;
        } else {
            sum += current;
        }
    }
    return sum;
}

function romanToInt2(str) {
    let sum = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        const current = getValue(str[i]);
        const prev = getValue(str[i + 1]) || -Infinity;
        if (prev > current) {
            sum -= current;
        } else {
            sum += current;
        }
    }
    return sum;
}

console.time('函数');
for (let i = 0; i < 10000000; i++) {
    romanToInt2('MCMXCIV');
}
console.timeEnd('函数');

console.time('对象');
for (let i = 0; i < 10000000; i++) {
    romanToInt1('MCMXCIV');
}
console.timeEnd('对象');


// console.log( romanToInt('LVIII') ); // IIIVL: 1 + 1 + 1 + 5 + 50
// console.log( romanToInt('IV') ); // VI: 5 - 1
// console.log( romanToInt('IX') ); // XI: 10 - 1
// console.log( romanToInt('MCMXCIV') ); // VICXMCM: 5 - 1 + 100 - 10 + 1000 - 100 + 1000
