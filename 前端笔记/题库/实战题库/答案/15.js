// <数组练习>封装数组去重方法
// 只考虑基础数据类型即可
function unique(arr) {
    const res = [];
    for (const item of arr) {
        // 如果res中没有当前项, 就向res中新增一项
        if (!res.includes(item)) {
            res.push(item);
        }
    }
    return res;
};

function unique(arr) {
    return arr.reduce((res, item) => {
        if (!res.includes(item)) {
            res.push(item);
        }
        return res;
    }, []);
}

const arr = [1, 2, 2, 3, 3, 3, 1, 1];

console.log( unique(arr) ); // [1, 2, 3]
