const data = [
    { name: 'zsa', score: 100 },
    { name: 'ls', score: 90 },
    { name: 'www', score: 80 },
    { name: 'zl', score: 70 },
];

// 1. 获取分数大于等于 90 的学生
console.log( data.filter(item => item.score >= 90) );

// 2. 获取所有名字为3个字的学生
console.log( data.filter(item => item.name.length === 3) );

// 3. 获取所有名字以z开头的学生
console.log( data.filter(item => item.name.startsWith('z')) );

// 4. 获取所有索引为偶数的学生
console.log( data.filter((_, i) => i % 2 === 0) );

