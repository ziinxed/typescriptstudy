const name = "Deok",
age = 24,
gender = "male";

const sayHi = (name, age, gender?) => {//gender parameter is optional
    console.log(`hello ${name}, you are ${age}, you are a ${gender}`);

};

sayHi(name, age);

export {}; //모듈로 인식