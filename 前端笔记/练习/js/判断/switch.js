// 2. 输入一个分数
// 分数为0 输出差生守门员
// 分数为60 输出良好守门员
// 分数为80 输出优等生守门员
// 其他情况忽略

// if elseif  gongchunjie
// var grace = +prompt('请输入您的分数');
// if (grace === 0) {
//     console.log('差生守门员');
// } else if (grace === 60) {
//     console.log('良好守门员');
// } else if (grace === 80) {
//     console.log('优等生守门员');
// } else {
//     console.log('其他');
// }

// switch
var score = +prompt('请输入您的分数');

switch (score) {
    case 0:
        console.log('差生守门员');
        break;
    case 60:
        console.log('良好守门员');
        break;
    case 80:
        console.log('优等生守门员');
        break;

    default:
        console.log('其他');
        break;
}
