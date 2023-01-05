// 父类
function Animal(name) {
    this.name = name;
}

Animal.prototype.move = function () {
    console.log('正在移动');
}

// 子类
function Dog(...args) {
    // 1. 继承this
    Animal.apply(this, args);
}

Dog.prototype.wangwang = function () {
    console.log('wangwang' + this.name);
};

// 2. 继承prototype
// 合并prototype
// 把Animal.prototype合并至Dog.prototype
Object.assign(Dog.prototype, Animal.prototype);

const dog = new Dog('旺财');

dog.move();
dog.wangwang();
