// rgba转颜色&透明度
function rgba2color(input) {
    const numsStr = input.split('(')[1]; // '   255,    0,   0,   0.5)'
    const [r, g, b, a] = numsStr.split(','); // ['   255', '    0', '   0', '   0.5)']
    const red = +r; // 255
    const green = +g; // 0
    const blue = +b; // 0
    const alpha = parseFloat(a); // .5

    const getNum16 = (num) => {
        const num16 = num.toString(16);
        return num16 < 10 ? 0 + num16 : num16;
    }

    return `color: #${ getNum16(red) + getNum16(green) + getNum16(blue) }; opacity: ${ alpha }`;
}

// 空格是故意写的
console.log(rgba2color('rgba(   255,    0,   0,   0.5)')); // 'color: #ff0000; opacity: 0.5;'
console.log(rgba2color('rgba(254, 0, 103, 0.9)')); // 'color: #fe0067; opacity: 0.9;'
