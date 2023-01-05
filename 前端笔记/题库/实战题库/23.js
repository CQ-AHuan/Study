// 检查数据中是否每一项的value都为true
const input = [
    {
        value: true,
    },
    {
        value: true,
    },
    {
        value: true,
        children: [
            {
                value: true,
            },
            {
                value: true,
                children: [
                    {
                        value: false,
                    },
                    {
                        value: true,
                    },
                ],
            },
        ],
    },
];

function check(input) {
    // to do
    return xxx;
}

console.log(check(input)); // false
