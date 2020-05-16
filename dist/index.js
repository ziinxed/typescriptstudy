"use strict";
/*
interface Human { //자바스크립트로 컴파일 되지 않는다.
    name: string;
    age: number;
    gender: string;
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
/*
const person = {
    name: "deok",
    age: 22,
    gender: "male"
};
*/
const deok = new Human("gyu", 18, "female");
const sayHi = (person) => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`; // $ 표시를 통해 스트링에 변수 삽입
};
console.log(sayHi(deok));
//# sourceMappingURL=index.js.map