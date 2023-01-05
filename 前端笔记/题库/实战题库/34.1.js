// 统计文件归类
const fileTypeMapping = new Map([
    ['md', 'markdown'],
    ['doc', 'word'],
    ['docx', 'word'],
    ['html', 'web'],
    ['xls', 'excel'],
]);

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

function getFileCount(input) {
    // to do
    return xxx;
}
