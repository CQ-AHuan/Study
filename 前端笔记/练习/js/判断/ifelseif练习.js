// 1. 输入一个年龄，打印这个人是未成年[0-18) 还是青年人[18-35) 还是其他人[35, Infinity)
var age = prompt('请输入年龄');
if (age >= 0 && age < 18) {
    console.log('未成年');
} else if (age >= 18 && age < 35) {
    console.log('青年人');
} else if (age >= 35) {
    console.log('其他人');
} else {
    console.log('输入错误');
}

// 2. 输入一个分数
// 分数[0-60)输出差生
// 分数[60-80)输出良好
// 分数[80-100)输出优等生
var score = prompt('请输入成绩');
if (score >= 0 && score <= 60) {
    alert('不及格');
} else if (score > 60 && score <= 80) {
    alert('良好');
} else if (score > 80 && score <= 100) {
    alert('优等生');
} else {
    alert('成绩无效');
}
