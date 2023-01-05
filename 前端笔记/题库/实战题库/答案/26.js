// 数组转换
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const output = [
    {
        position: [1, 2, 3],
    },
    {
        position: [4, 5, 6],
    },
    {
        position: [7, 8, 9],
    },
    {
        position: [10, 11, 12],
    },
    {
        position: [13, 14, 15],
    },
];

// 方法1
function transform(input) {
    const res = [];
    for (let i = 0; i < input.length; i += 3) {
        // i: 0
        // 1: i + 0
        // 2: i + 1
        // 3: i + 2
        // res.push({
        //     position: [
        //         input[i + 0],
        //         input[i + 1],
        //         input[i + 2],
        //     ],
        // });

        res.push({
            position: input.slice(i, i + 3),
        });
    }
    return res;
}
