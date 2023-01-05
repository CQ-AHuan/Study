const data = [
    {
        weekIndexType: 'all',
        classNames: [ // 班级名称列表
            '2021级商务经济学(中英)1班',
            '2021级商务经济学(中英)2班',
        ],
        classroomId: 'N4503', // 教室id
        indexes: [2, 3], // 第3, 4节课
        weekdays: [0], // 星期1
        teacherName: '张三', // 教师
        courseName: '概率论与数理统计A', // 课程名称
    },
    {
        weekIndexType: 'all',
        classNames: [
            '2021级商务经济学(中英)1班',
            '2021级商务经济学(中英)2班',
        ],
        classroomId: '室外',
        indexes: [4, 5],
        weekdays: [1],
        teacherName: '李四',
        courseName: '大学体育',
    },
    {
        weekIndexType: 'all',
        classNames: [
            '2021级商务经济学(中英)1班',
            '2021级商务经济学(中英)2班',
        ],
        classroomId: 'N4419',
        indexes: [2, 3],
        weekdays: [2],
        teacherName: '张三',
        courseName: '概率论与数理统计A',
    },
    {
        weekIndexType: 'all',
        classNames: [
            '2021级经济与金融(中英)1班',
            '2021级经济与金融(中英)2班',
        ],
        classroomId: 'N4503',
        indexes: [0, 1],
        weekdays: [0],
        teacherName: '张三',
        courseName: '概率论与数理统计A',
    },
    {
        weekIndexType: 'all',
        classNames: [
            '2021级经济与金融(中英)1班',
            '2021级经济与金融(中英)2班',
        ],
        classroomId: 'N4320',
        indexes: [6, 7],
        weekdays: [1],
        teacherName: '张三',
        courseName: '概率论与数理统计A',
    },
];

/**
 * js-doc
 * @param { string[] } letters 全量数组
 * @param { string } expect 要找的数组项
 */
function includes(letters, expect) {
    for (const letter of letters) {
        if (letter === expect) {
            return true;
        }
    }
    return false;
}

function getAllClass(arr) {
    const res = [];
    for (var item of arr) {
        // item: { ... }
        // ['1班', '2班']: item.classNames
        // res中没有'1班', '2班'
        for (const className of item.classNames) {
            // className: '1班'
            if (!includes(res, className)) {
                res.push(className);
            }
        }
    }
    return res;
}

console.log( getAllClass(data) ); // ['2021级商务经济学(中英)1班', '2021级商务经济学(中英)2班', '2021级经济与金融(中英)1班', '2021级经济与金融(中英)2班']
