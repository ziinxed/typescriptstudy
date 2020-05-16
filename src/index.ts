interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "deok",
    age: 22,
    gender: "male"
};


const sayHi = (person: Human): string => { // 함수, 파라미터의 타입을 지정
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`; // $ 표시를 통해 스트링에 변수 삽입

};

console.log(sayHi(person));

export {}; //모듈로 인식 