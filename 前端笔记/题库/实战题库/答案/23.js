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

// 1.
function check(input) {
    for (const item of input) {
        // 如果有false 直接返回
        if (!item.value) {
            return false;
        }
        // 如果有children并且检查children的时候发现false了 就返回false
        if (item.children && !check(item.children)) {
            return false;
        }
    }
    return true;
}

// 2.
function check(input) {
    return input.every(item => {
        if (!item.children) {
            return item.value;
        } else {
            return item.value && check(item.children);
        }
    });
}

// 3.
function check(input) {
    return input.every(item => item.value && check(item.children || []));
}

console.log(check(input)); // false
