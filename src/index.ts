/*
interface Human { //자바스크립트로 컴파일 되지 않는다.
    name: string;
    age: number;
    gender: string;
}
*/

class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age:number, gender: string){
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

const sayHi = (person: Human): string => { // 함수, 파라미터의 타입을 지정
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`; // $ 표시를 통해 스트링에 변수 삽입

};

console.log(sayHi(deok));

export {}; //모듈로 인식 