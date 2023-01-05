// 使用构造函数生成一个对象
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log(this);
        console.log('hello');
    };
}

const p1 = new Person('zs', 18); // { name: 'zs', age: 18, sayHello () { console.log('hello'); } }
const p2 = new Person('ls', 19); // { name: 'ls', age: 19, sayHello () { console.log('hello'); } }

// p1, p2也就是new出来的结果叫做 实例 instance
// p1.sayHello();
p2.sayHello();

console.log( p1 instanceof Person ); // true
