// <字符串练习>颜色&透明度转rgba
function color2rgba(input) {
    // 期待: 254, 0, 104
    const tmp = input.split(';').filter(item => item.trim()); // ['opacity: 0.9', 'color: #fe0068']

    // 期待 {
    //     color: '#fe0068',
    //     opacity: '0.9',
    // };
    const style = {};
    for (const item of tmp) {
        // item: 'opacity: 0.9'
        const [key, value] = item.split(':'); // key: 'opacity'   value: '0.9'
        style[key.trim()] = value.trim();
    }

    const redStr = style.color.substring(1, 3); // 'fe'
    const greenStr = style.color.substring(3, 5); // '00'
    const blueStr = style.color.substring(5, 7); // '68'

    const r = parseInt(redStr, 16);
    const g = parseInt(greenStr, 16);
    const b = parseInt(blueStr, 16);

    return `rgba(${ r }, ${ g }, ${ b }, ${ style.opacity })`;
}

function color2rgba(input) {

    const style = input
        .split(';')
        .filter(item => item.trim())
        .reduce((res, item) => {
            const [key, value] = item.split(':'); // key: 'opacity'   value: '0.9'
            res[key.trim()] = value.trim();
            return res;
        }, {});

    const get10color = (startIndex, endIndex) => parseInt(style.color.substring(startIndex, endIndex), 16);

    const r = get10color(1, 3);
    const g = get10color(3, 5);
    const b = get10color(5, 7);

    return `rgba(${ r }, ${ g }, ${ b }, ${ style.opacity })`;
}

console.log(color2rgba('opacity: 0.9; color: #fe0068;')); // 'rgba(254, 0, 104, 0.9)'
console.log(color2rgba('color: #ff0000; opacity: 0.5;')); // 'rgba(255, 0, 0, 0.5)'
