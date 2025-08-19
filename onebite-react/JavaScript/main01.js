// 📌chapter04. 변수와 상수

// 1. 변수
let age = 27; // 변수 선언 및 초기화 (초기화하지 않을 경우 undefined 할당)
age = 30;

// 2. 상수
const birth = "1997.01.07"; // 값 변경 불가능, 상수 선언 시 초기화 필수

// 3. 변수 명명 규칙 (네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.
// let let;

// 4. 변수 명명 가이드
// - 이해할 수 있는 의미있는 변수명으로 명명
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;

//----------------------------------------------------------------------------------
// 📌chapter05. 자료형(타입)

// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;
let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대
let nan = NaN; // not a number, 수치연산이 실패했을 경우 (불가능한 수치연산: 1 * "hello")

// 2. String Type
// - 템플릿 리터럴 문법 : backtick(`) 사용, ${변수명}을 통해 변수값을 동적으로 문자열에 포함시킬 수 있음
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;
let introduceText = `${myName}은 ${myLocation}에 거주합니다`;

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;

// 참고) null vs undefined
// - null : 직접 명시적으로 변수에 할당하는 값
// - undefined : (변수를 선언하고 초기화하지 않았을 경우) 자동으로 할당되는 값

//----------------------------------------------------------------------------------
// 📌chapter06. 형 변환

// 1. 묵시적 형 변환
// - 자바스크립트 엔진이 알아서 형 변환
let num = 10;
let str = "20";
const result = num + str;

// 2. 명시적 형 변환
// - 프로그래머가 내장함수 등을 이용해서 직접 형 변환을 명시
let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개";
let strToNum2 = parseInt(str2);

let num4 = 20;
let numToStr1 = String(num4);

//----------------------------------------------------------------------------------
// 📌chapter07. 연산자1

// 1. 대입 연산자 (=)
let var1 = 1;

// 2. 산술 연산자
let num5 = 3 + 2;
let num6 = 3 - 2;
let num7 = 3 * 2;
let num8 = 3 / 2;
let num9 = 3 % 2;
let num10 = (1 + 2) * 10;

// 3. 복합 대입 연산자
let num11 = 10;
num11 += 20;
num11 -= 20;
num11 *= 20;
num11 /= 20;
num11 %= 10;

// 4. 증감 연산자 (++, --)
let num12 = 10;
++num12; // 전위 연산 (해당 라인에서 즉시 1 증감)
num12++; // 후휘 연산 (해당 라인이 끝난 후 1 증감)

// 5. 논리 연산자 (||, &&, !)
let or = true || false;
let and = true && false;
let not = !true;

// 6. 비교 연산자
// 참고) == : 값 자체만 비교O, 값의 자료형까지 같은지는 비교X
let comp1 = 1 === "1"; // 동등 비교 연산자 (===)
let comp2 = 1 !== 2; // 비동등 비교 연산자 (!==)
let comp3 = 2 > 1;
let comp4 = 2 < 1;
let comp5 = 2 >= 2;
let comp6 = 2 <= 2;

//----------------------------------------------------------------------------------
// 📌chapter08. 연산자2

// 1. null 병합 연산자 (??)
// - 존재하는 값을 추려내는 기능
// - null, undefined가 아닌 값을 찾아내는 연산자
let var2;
let var3 = 10;
let var4 = 20;
let var5 = var2 ?? var3;
let var6 = var2 ?? var4;
let var7 = var3 ?? var4;

let userName;
let userNickName = "Winterlood";
let displayName = userName ?? userNickName;

// 2. typeof 연산자
// - 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var8 = 1;
var8 = "hello";
var8 = true;

let t1 = typeof var8;

// 3. 삼항 연산자
// - 항을 3개 사용하는 연산자
// - 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var9 = 10;
let res = var9 % 2 === 0 ? "짝수" : "홀수";

//----------------------------------------------------------------------------------
// 📌chapter09. 조건문

// 1. if 조건문 (if문)
let num13 = 4;

if (num13 >= 10) {
  console.log("num은 10 이상입니다");
  console.log("조건이 참 입니다!");
} else if (num13 >= 5) {
  console.log("num은 5 이상입니다");
} else if (num13 >= 3) {
  console.log("num은 3 이상입니다");
} else {
  console.log("조건이 거짓입니다!");
}

// 2. Switch 문
let animal = "owl";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("그런 동물은 전 모릅니다");
  }
}

// 참고) if vs switch
// - if : 복잡한 여러 개의 조건을 이용 할 경우
// - switch : 변수의 값을 기준으로 조건을 처리할 경우

//----------------------------------------------------------------------------------
// 📌chapter10. 반복문

// for (초기식; 조건식; 증감식) { ... }
for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}

//----------------------------------------------------------------------------------
// 📌chapter11. 함수

// 함수 선언
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }
  another();

  let area = width * height;
  return area;
}

// 함수 호출
let area1 = getArea(10, 20);

// 참고) 호이스팅
// - 선언문을 호출문보다 아래에 작성하여도 내부적으로 상단으로 끌어올려서 실행시켜주는 기능
// - 함수 선언식만 호이스팅 가능

//----------------------------------------------------------------------------------
// 📌chapter12. 함수 표현식과 화살표 함수

// 함수 선언식
function funcA() {
  console.log("funcA");
}

let varA = funcA;
varA();

// 1. 함수 표현식
// - 함수를 선언하지 않고 값으로써 함수 생성 (함수명으로 호출 불가능)
let varB = function funcB() {
  console.log("funcB");
};

let varC = function () {
  console.log("funcC");
};

// 2. 화살표 함수
let varD = (value) => {
  console.log(value);
  return value + 1;
};

let varE = (value) => value + 1;

//----------------------------------------------------------------------------------
// 📌chapter13. 콜백함수

// 1. 콜백함수
// - 자신이 아닌 다른 함수에, 인수로써 전달된 함수
function main(value) {
  value();
}

main(() => {
  console.log("i am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});

//----------------------------------------------------------------------------------
// 📌chapter14. 스코프

// 스코프
// - 전역(전체 영역) 스코프 : 전체 영역에서 접근 가능
// - 지역(특정 영역) 스코프 : 특정 영역에서만 접근 가능
// - 예외적으로 조건문, 반복문 내에서 함수 선억식은 지역 스코프를 갖지 않음 (외부에서 호출 가능)

let a = 1; // 전역 스코프

// 함수 영역
function funcA1() {
  let b = 2; // 지역 스코프
  console.log(a);

  function funcB() {} // 지역 스코프
}

// 조건문 영역
if (true) {
  let c = 1; // 지역 스코프
}

// 반목문 영역
for (let i = 0; i < 10; i++) {
  let d = 1; // 지역 스코프
}

//----------------------------------------------------------------------------------
// 📌chapter15. 객체 1

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
  job: "FE Developer",
  extra: {},
  10: 20,
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age2 = person["age2"];

let property = "hobby";
let hobby = person[property];

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3-3. 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3-4. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;

//----------------------------------------------------------------------------------
// 📌chapter16. 객체 2

// 1. 상수 객체
// - 새로운 객체로 변경 불가능
const animal1 = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal1.age = 2; // 추가
animal1.name = "까망이"; // 수정
delete animal1.color; // 삭제

// 2. 메서드
// - 값이 함수인 프로퍼티
const person1 = {
  name: "이정환",
  // 메서드 선언
  sayHi() {
    console.log("안녕!");
  },
};

person1.sayHi();
person1["sayHi"]();

//----------------------------------------------------------------------------------
// 📌chapter17. 배열

// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴
let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];

// 2. 배열 요소 접근 - 인덱스
let item1 = arrC[0];
let item2 = arrC[1];
arrC[0] = "hello";
