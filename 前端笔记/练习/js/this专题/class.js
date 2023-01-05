class Person {

    constructor(name) {
        this.name = name;
        // console.log(this); // 实例
    }

    // this: 实例
    uname = this.name;

    sayHi() {
        // this: 实例
        console.log(this.uname); // undefined
    }

    static getNameLength() {
        console.log(this);
    }

}

// const p1 = new Person(1);
// const p2 = new Person(2);

// p1.sayHi();


Person.getNameLength();
