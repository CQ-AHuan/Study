// 统计文件归类
const fileTypeMapping = [
    ['md', 'markdown'],
    ['doc', 'word'],
    ['docx', 'word'],
    ['html', 'web'],
    ['xls', 'excel'],
];

const input = [
    'js-this.md',
    'vue.docx',
    'js-class.md',
    'react.xixi.doc',
    'mp.xls',
    'fe06.xls',
    'fe06.heihei.xls',
    'index.html',
];

const output = {
    word: [
        'vue.docx',
        'react.xixi.doc',
    ],
    markdown: [
        'js-this.md',
        'js-class.md',
    ],
    excel: [
        'mp.xls',
        'fe06.xls',
        'fe06.heihei.xls',
    ],
    web: [
        'index.html',
    ],
};

// 1.
function arr2obj(arr) {
    const res = {};
    for (const [key, value] of arr) {
        res[key] = value;
    }
    return res;
}

function getFileCount(input, mapping) {
    const objMapping = arr2obj(mapping);
    const res = {};
    for (const item of input) {
        // item: 'js-this.md'
        const suffix = item.split('.').at(-1); // 'md'
        // 'md' >>> 'markdown'
        const fileType = objMapping[suffix]; // 'markdown'
        // 如果res中没有'markdown'，则初始化为[]
        if (!res[fileType]) {
            res[fileType] = [];
        }
        res[fileType].push(item);
    }
    return res;
}

// 2.
function getFileCount(input, mapping) {
    const objMapping = Object.fromEntries(mapping);
    const res = {};
    for (const item of input) {
        // item: 'js-this.md'
        const suffix = item.split('.').at(-1); // 'md'
        // 'md' >>> 'markdown'
        const fileType = objMapping[suffix]; // 'markdown'
        // 如果res中没有'markdown'，则初始化为[]
        if (!res[fileType]) {
            res[fileType] = [];
        }
        res[fileType].push(item);
    }
    return res;
}

// 3.
function getFileCount(input, mapping) {
    const res = {};
    for (const item of input) {
        // item: 'js-this.md'
        const suffix = item.split('.').at(-1); // 'md'
        // 'md' >>> 'markdown'
        const fileType = mapping.find(m => m[0] === suffix)[1]; // 'markdown'
        // 如果res中没有'markdown'，则初始化为[]
        if (!res[fileType]) {
            res[fileType] = [];
        }
        res[fileType].push(item);
    }
    return res;
}

getFileCount(input, fileTypeMapping);
