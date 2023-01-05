// 颜色&透明度转rgba
function color2rgba(input) {

    const style = input
        .split(';')
        .filter(item => item.trim())
        .reduce((res, item) => {
            const [key, value] = item.split(':'); // key: 'opacity'   value: '0.9'
            res[key.trim()] = value.trim();
            return res;
        }, {});

    const get10color = (startIndex, endIndex) => {
        const num16 = style.color.substring(startIndex, endIndex); // 'afe'
        // e * 16^0 + f * 16^1 + a * 16^2
        let sum = 0;
        const mapping = {
            // 0: 0,
            // 1: 1,
            // ...
            a: 10,
            b: 11,
            c: 12,
            d: 13,
            e: 14,
            f: 15,
        };

        const nums = num16.split('').reverse(); // 'afe' >>> ['a', 'f', 'e'] >>> ['e', 'f', 'a']
        for (let i = 0; i < nums.length; i++) {
            const num = isNaN(nums[i]) ? mapping[nums[i]] : nums[i]; // 'e' >>> 14
            sum += num * (16 ** i);
        }

        return sum;
    };

    const r = get10color(1, 3);
    const g = get10color(3, 5);
    const b = get10color(5, 7);

    return `rgba(${ r }, ${ g }, ${ b }, ${ style.opacity })`;
}

// 不能使用parseInt
console.log(color2rgba('color: #ff0000; opacity: 0.5;')); // 'rgba(255, 0, 0, 0.5)'
console.log(color2rgba('color: #fe0068; opacity: 0.9;')); // 'rgba(254, 0, 104, 0.9)'
