// 数组转换
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const output = [
    {
        x: 1,
        y: 2,
        z: 3,
    },
    {
        x: 4,
        y: 5,
        z: 6,
    },
    {
        x: 7,
        y: 8,
        z: 9,
    },
    {
        x: 10,
        y: 11,
        z: 12,
    },
    {
        x: 13,
        y: 14,
        z: 15,
    },
];

// 1.
function transform(input) {
    const res = [];
    for (let i = 0; i < input.length; i += 3) {
        // i: 0
        // 期待1, 2, 3
        // 1: input[0] >> i
        // 2: input[1] >> i + 1
        // 3: input[2] >> i + 2

        // i: 3
        // 期待4, 5, 6
        // 4: input[3] >> i
        // 5: input[4] >> i + 1
        // 6: input[5] >> i + 2

        res.push({
            x: input[i],
            y: input[i + 1],
            z: input[i + 2],
        });
    }
    return res;
}

// 2.
function transform(input) {
    return input.reduce((res, item, i) => {
        if (i % 3 !== 0) {
            return res;
        }
        res.push({
            x: input[i],
            y: input[i + 1],
            z: input[i + 2],
        });
        return res;
    }, []);
}

// 3.
function transform(input) {
    return input.reduce((res, item, i) => {
        if (i % 3 !== 0) {
            return res;
        }
        return res.concat({
            x: input[i],
            y: input[i + 1],
            z: input[i + 2],
        });
    }, []);
}

// 4.
function transform(input) {
    // 5
    return new Array(input.length / 3).fill(0).map((_, i) => {
        // i: 0, 1, 2, 3, 4

        // i: 0
        // x: input[0]
        // y: input[1]
        // z: input[2]

        // i: 1
        // x: input[3]
        // y: input[4]
        // z: input[5]

        // i: 2
        // x: input[6]
        // y: input[7]
        // z: input[8]
        return {
            x: input[i * 3],
            y: input[i * 3 + 1],
            z: input[i * 3 + 2],
        };
    });
}

function transform(input) {
    return new Array(input.length / 3).fill(0).map((_, i) => ({
        x: input[i * 3],
        y: input[i * 3 + 1],
        z: input[i * 3 + 2],
    }));
}

// 5.
function transform(input) {
    const res = [];
    for (let i = 0; i < input.length / 3; i++) {
        res.push({
            x: input[i * 3],
            y: input[i * 3 + 1],
            z: input[i * 3 + 2],
        });
    }
    return res;
}
