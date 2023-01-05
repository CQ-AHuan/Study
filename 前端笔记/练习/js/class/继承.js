class Animal {
    constructor(name) {
        this.name = name;
    }

    move() {
        console.log('正在移动');
    }
}

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

class Fish extends Animal {
    constructor(...args) {
        // 调用父类的constructor构造函数
        super(...args);
    }

    breathInWater() {
        console.log('水下呼吸');
    }
}

const fish = new Fish('lele');
fish.move();
fish.breathInWater();
