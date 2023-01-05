class Animal {
    constructor(name) {
        this.name = name;
    }

    move() {
        console.log('正在移动');
    }

    // 添加一个工具方法
    // 打印名字的长度
    // 如果必须依赖实例 就浪费了资源 使用也不方便
    static logNameLength(name) {
        console.log(name.length);
    }
}

Animal.logNameLength('旺财'); // 2
