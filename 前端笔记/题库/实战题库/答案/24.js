// 检查链表中是否每一项的value都为true
const input = {
    value: true,
    next: {
        value: true,
        next: {
            value: false,
            next: {
                value: true,
            },
        },
    },
};

function check(input) {
    if (input.value && input.next) {
        return check(input.next);
    } else {
        return input.value;
    }
}

console.log(check(input)); // false
