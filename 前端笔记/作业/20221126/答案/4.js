// 第4题：
// 封装一个函数，输入一个数据数组和敏感词数组，返回将敏感词过滤后的数组
function transform(arr, sensitive) {
    var res = [];
    for (var item of arr) {
        // item: { name: '张三', content: '疫情防控人人有责, rnm什么时候解封' }
        // var newContent = item.content.replace('疫情', '***').replace('rnm', '***');
        var newContent = item.content;
        for (var sensitiveItem of sensitive) {
            // sensitiveItem: '疫情', 'rnm'
            // item.content是否包含敏感词
            if (item.content.includes(sensitiveItem)) {
                newContent = newContent.replaceAll(sensitiveItem, '***');
            }
        }
        res.push({
            name: item.name,
            content: newContent,
        });
    }
    return res;
}

var arr = [
    {
        name: '张三',
        content: '疫情防控人人有责, rnm什么时候解封, 疫情防控人人有责',
    },
    {
        name: '李四',
        content: '我是李四, rnm什么时候解封',
    },
    {
        name: '王五',
        content: '我是王五, 我太难了',
    },
];

var sensitive = ['疫情', 'rnm'];

console.log( transform(arr, sensitive) );
// [
//     {
//         name: '张三',
//         content: '**防控人人有责, ***什么时候解封',
//     },
//     {
//         name: '李四',
//         content: '我是李四, ***什么时候解封',
//     },
//     {
//         name: '王五',
//         content: '我是王五, 我太难了',
//     },
// ]