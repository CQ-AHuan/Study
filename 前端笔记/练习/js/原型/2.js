// 父类
class Animal {
    constructor(name) {
        this.name = name;
    }

    move() {
        console.log('正在移动');
    }
}

// 子类
class Dog extends Animal {
    constructor(...args) {
        // 调用父类的constructor构造函数
        super(...args);
    }

    wangwang() {
        console.log('旺旺');
        console.log(this.name);
    }
}

const dog = new Dog('wangcai');
dog.move();
dog.wangwang();