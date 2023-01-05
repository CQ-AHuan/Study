// 1. 使用while循环打印0-10
var i = 0;
while (i < 11) {
    console.log(i++);
}

// 2. 输入一个数字，直到输入偶数为止
var num;
while (!(num % 2 === 0)) {
    num = prompt('请输入数字');
}

// 3. 输入想不想上课，如果输入的内容为不想，则一直弹窗询问
var content = prompt('想不想上课');
while (content === '不想') {
    content = prompt('想不想上课');
}

// 4. 输入用户名和密码，如果用户名和密码都正确，输出成功，否则继续询问
var username = prompt('用户名'); // 期待: '张三'
var password = prompt('密码'); // 期待: 123
// 4.1 用户名和密码有一个输错了就不行
while (username !== '张三' || password !== '123') {
    username = prompt('用户名');
    password = prompt('密码');
}

// 4.2 除了(用户名和密码都输对了)
while (!(username === '张三' && password === '123')) {
    username = prompt('用户名');
    password = prompt('密码');
}
