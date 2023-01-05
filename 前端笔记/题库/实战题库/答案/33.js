// 统计文件种类的个数
const fileTypeMapping = {
    md: 'markdown',
    doc: 'word',
    docx: 'word',
    html: 'web',
    xls: 'excel',
};

const input = [
    'js-this.md', // 'markdown'
    'vue.docx', // 'word'
    'js-class.md',
    'react.xixi.doc',
    'mp.xls',
    'fe06.xls',
    'fe06.heihei.xls',
    'index.html',
];

const output = {
    word: 2,
    markdown: 2,
    excel: 3,
    web: 1,
};

// 1.
function getFileCount(input, mapping) {
    const res = {};
    for (const item of input) {
        // item: 'js-this.md'
        const suffix = item.split('.').at(-1); // 'md'
        // 通过'md' 期待得到'markdown'
        const fileType = mapping[suffix]; // 'markdown'

        // 如果结果对象中不存在'markdown' 就初始化一下
        if (!res[fileType]) {
            res[fileType] = 0;
        }
        // 不管存在与否都++
        res[fileType]++;
    }
    return res;
}

// 2.
function getFileCount(input, mapping) {
    return input
        .map(item => mapping[item.split('.').at(-1)])
        .reduce((res, fileType) => {
            if (!res[fileType]) {
                res[fileType] = 0;
            }
            res[fileType]++;
            return res;
        }, {});
}

console.log( getFileCount(input, fileTypeMapping) );
