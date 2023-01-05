// 类
class Person {

    // 类的构造函数
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    type = '人';

    sayHello() {
        console.log('hello');
    }

}

// 使用的时候和构造函数没区别
const p1 = new Person('zs', 18);
const p2 = new Person('zs', 18);
const p3 = new Person('zs', 18);

p1.sayHello();
console.log(p1.type);
