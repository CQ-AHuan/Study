// 1. 依次输入两个数字，输出较大的一个
var num1 = prompt('请输入第一个数');
var num2 = prompt('请输入第二个数');
if (num1 > num2) {
    console.log('最大数的数为第一个数：' + num1);
} else {
    console.log('最大数的数为第二个数：' + num2);
}

// 2. 依次输入两个数字，输出较大的一个，若两个数字相等，则输出'您输入了相等的数字'
var n1 = prompt('请输入第一个数'); // 'hello'
var n2 = prompt('请输入第二个数'); // 'hello'

// 如果n1, n2有一个不是数字
if (isNaN(n1) || isNaN(n2)) {
    alert('输入数字有误');
} else {
    if (n1 === n2) {
        alert('相等');
    } else if (n1 > n2) {
        alert(n1);
    } else {
        alert(n2);
    }
}

// 3. 随便输入一个东西，如果是数字，输出'您输入了一个数字', 反之输出'您输入了一段文字'
var inp = prompt('请输入内容');
if (!isNaN(inp)) {
    alert('您输入了一个数字');
} else {
    alert('您输入了一段文字');
}

// 4. 输入一个数字，如果是偶数，输出'您输入的是偶数', 反之输出'您输入的是奇数', 如果输入的不是数字，输出'您输入的不是数字'
var a = prompt('随便输入一个东西');
switch (a % 2) {
    case 0:
        console.log('您输入的是偶数');
        break;
    case 1:
        console.log('您输入的是奇数');
        break;
    default:
        console.log('您输入的不是数字');
        break;
}

// 5. 说出以下代码的运行结果，并解释原因
var n1 = 10;
console.log( ++n1 === ++n1 ); // 11 === 12  结果为false
console.log( ++n1 === n1++ ); // 13 === 13  结果为true
console.log( ++n1 === n1++ ); // 15 === 15  结果为true

// 6. 说出以下代码的运行结果，并解释原因
var n2 = 10;
console.log( --n2 - --n2 + n2++ + ++n2 ); // 9 - 8 + 8 + 10 = 19

// 7. 说出以下代码的运行结果，并解释原因
var n3 = 0;
switch (n3++) {
    case 0:
      	console.log('a'); // 打印这句
        break;
    case 1:
        n3++;
      	console.log('b');
        break;
    case 2:
      	console.log('c');
        break;
  	default:
      	console.log('d');
        break;
}
console.log(n3); // 1

// 8. 说出以下代码的运行结果，并解释原因
var n4; // undefined
switch (n4++) { // NaN
    case 0:
      	console.log(n4++);
        break;
    case 1:
      	console.log(n4--);
        break;
  	default:
      	console.log(++n4); // NaN
        break;
}
console.log(n4); // NaN

// 9. 输入一个数字，判断是否为5的倍数
var num = +prompt('输入一个数字')
if (num % 5 === 0) {
    console.log('是');
} else {
    console.log('否');
}

// 10. 输入一个成绩，判断成绩等级，90分以上输出A，80分以上输出B，70分以上输出C，60分以上输出D，60分以下输出E
// switch
var results = +prompt('请输入成绩');
switch (true) {
    case results >= 100:
        console.log('超出范围');
        break;
    case results >= 90:
        console.log('A');
        break;
    case results >= 80:
        console.log('B');
        break;
    case results >= 70:
        console.log('C');
        break;
    case results >= 60:
        console.log('D');
        break;
    case results >= 0:
        console.log('E');
        break;
    default:
        console.log('输入无效');
        break;
}

// if
var score = +prompt('请输入成绩');
if (score >= 100) {
    console.log('超出范围');
} else if (score >= 90) {
    console.log('A');
} else if (score >= 80) {
    console.log('B');
} else if (score >= 70) {
    console.log('C');
} else if (score >= 60) {
    console.log('D');
} else if (score >= 0) {
    console.log('E');
} else {
    console.log('输入无效');
}

