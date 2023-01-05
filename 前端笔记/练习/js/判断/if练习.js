// 1. 输入一个成绩，打印及格或不及格(60)
var grade = prompt('请输入您的成绩');

if (grade >= 60) {
  console.log('恭喜你，及格啦');
} else {
  console.log('很遗憾，你需要补考哦');
}

// 2. 输入一个数字，打印该数字是否为偶数
var num = prompt('请输入一个数字');

if (num % 2 === 0) {
    console.log('这是一个偶数');
} else {
    console.log('这是一个奇数');
}

// 3. 随便输入，打印输入的内容是否为数字
var result = prompt('请随便输入'); // '0'
if (!isNaN(result)) {
  alert(result + '是一个数字');
} else {
  alert(result + '不是一个数字'); // 'hello world'
}

// 4. 输入一个年龄，打印这个人是否为青年人(18-35)
var age = prompt('请输入年龄');

// 范围取值
if (age >= 18 && age <= 35) {
    console.log('这个人是青年人');
} else {
    console.log('不是青年热');
}
