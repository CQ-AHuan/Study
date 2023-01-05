// <数组&字符串练习>将类名数组转换为字符串
const input = [
    'box',
    'container',
    'flex-box',
];
const output = 'box container flex-box';

function classNames(input) {
    return input.join(' ');
}
