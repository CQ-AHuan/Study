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

function isFree(data, classroomId, weekday, index) {
    // 查找符合classroomId, weekday, index的数组项 找到了就是没空
    for (const item of data) {
        // item.classroomId === classroomId
        // item.weekdays数组中包含weekday
        // item.indexes中包含index
        if (
            item.classroomId === classroomId
            && includes(item.weekdays, weekday)
            && includes(item.indexes, index)
        ) {
            return false;
        }
    }
    return true;
}

console.log( isFree(data, 'N4503', 0, 2) ); // false (N4503在星期1的第3节课有课)
console.log( isFree(data, 'N4503', 0, 4) ); // true
