// 1. 已知一个固定格式的数组, 统计平均分, 生成所示数组
var data = [
  {
    name: '于老师',
    students: [
      { name: 'zs1', score: 1 },
      { name: 'zs2', score: 2 },
      { name: 'zs3', score: 3 },
      { name: 'zs4', score: 4 },
      { name: 'zs5', score: 5 },
    ],
  },
  {
    name: '易老师',
    students: [
      { name: 'ls1', score: 6 },
      { name: 'ls2', score: 7 },
      { name: 'ls3', score: 8 },
      { name: 'ls4', score: 9 },
      { name: 'ls5', score: 10 },
    ],
  },
];

// 输出: [{ teacher: '于老师', avg: 3 }, { teacher: '易老师', avg: 8 }

var res = [];
for (var item of data) {
    // item: { name: '于老师', students: [...] }
    var sum = 0;
    for (var student of item.students) {
        // student: { name: 'zs1', score: 1 }
        sum += student.score;
    }
    // sum求解完成
    res.push({
        teacher: item.name,
        avg: sum / item.students.length,
    });
}
console.log(res);
