
const sayHi = (name:string, age:number, gender:string): string => { // 함수, 파라미터의 타입을 지정
    return `hello ${name}, you are ${age}, you are a ${gender}!`; // $ 표시를 통해 스트링에 변수 삽입

};

sayHi("whaing", 24, `male`);

export {}; //모듈로 인식 