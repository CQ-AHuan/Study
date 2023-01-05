// 1. 打印所有的名字组成的新数组
var person = {
    name: 'zs',
    children: [
        {
            name: 'ls',
        },
        {
            name: 'ww',
            children: [
                {
                    name: 'z6',
                    children: [
                        {
                            name: 'aa',
                            children: [
                                {
                                    name: 'cc',
                                },
                            ],
                        },
                        {
                            name: 'bb',
                        },
                    ],
                },
            ],
        },
    ],
};

// 打印person的名字
// function getNameList(person) {
//     var res = [];

//     function log(person) {
//         res.push(person.name);
//         for (var child of person.children || []) {

//             // 打印child的名字
//             log(child);
//         }
//     }
//     log(person);

//     return res;
// }

// console.log(getNameList(person));

// 2. 打印链表, 期待结果'a>>b>>c>>d>>e'
// 2.1 打印链表, 依次打印'a', 'b', 'c', ...
var list = {
    value: 'a',
    next: {
        value: 'b',
        next: {
            value: 'c',
            next: {
                value: 'd',
                next: {
                    value: 'e',
                    next: null,
                },
            },
        },
    },
};

// 2.1 必会
function log(list) {
    console.log(list.value);
    // if (list.next) {
    //     log(list.next);
    // }
    list.next && log(list.next);
}

log(list);

// 2麻烦
function createListStr(list) {
    var str = ''; // '>>a>>b>>c>>d>>e'

    function concat(list) {
        // 递归出所有的字母
        str += (str ? '>>' : '') + list.value;
        list.next && concat(list.next);
    }

    concat(list);

    return str;
}

console.log(createListStr(list));

// 2稍微好一点
function concat(list) {
    var str = list.value;
    return str + (list.next ? '>>' + concat(list.next) : '');
}

// 'a' + 递归('b' + 递归(c + '递归')))
