"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "deok",
    age: 22,
    gender: "male"
};
const sayHi = (person) => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`; // $ 표시를 통해 스트링에 변수 삽입
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map