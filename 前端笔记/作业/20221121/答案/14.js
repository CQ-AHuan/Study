// 14.已知一个固定格式的学生成绩数组, 判断是否每一位学生的都成绩大于等于80分, 如果是输出true, 否则输出false;
var arr = [
   { name: '张三', score: 89 },
   { name: '李四', score: 90 },
   { name: '王五', score: 78 },
];

var isAllGoodStudent = true;

for (var item of arr) {
   if (item.score < 80) {
      isAllGoodStudent = false;
      break;
   }
}

console.log(isAllGoodStudent);
