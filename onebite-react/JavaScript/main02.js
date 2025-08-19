// 📌chapter01. Truthy와 Falsy

// 1. Falsy 한 값 (7가지)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy 한 값
// - 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
// - 객체 프로퍼티에 접근하는 함수에서 값이 null, undefined가 아님을 확인
// - 비효율적인 복잡한 조건문을 간결하게 개선 가능
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "이정환" };
printName(person);

//----------------------------------------------------------------------------------
// 📌chapter02. 단락 평가

// 1. 단락 평가
let varA = false;
let varB = true;
console.log(varA && varB);
console.log(varB || varA);

// 1-1. 함수 호출
// - 특정 조건에 맞춰 함수를 호출하지 않도록 방지할 수 있음
function returnFalse() {
  console.log("Fasle 함수 호출");
  // return false;
  return undefined;
}

function returnTrue() {
  console.log("True 함수 호출");
  // return true;
  return 10;
}

console.log(returnFalse() && returnTrue());

// 2. 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환" });

//----------------------------------------------------------------------------------
// 📌chapter03. 구조 분해 할당

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];
let [one, two, three, four = 4] = arr;

// 2. 객체의 구조 분해 할당
let person1 = { name: "이정환", age: 27, hobby: "테니스" };
let { age: myAge, hobby, name, extra = "hello" } = person1;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person1);

//----------------------------------------------------------------------------------
// 📌chapter04. Spread 연산자와 Rest 매개변수

// 1. Spread 연산자
// - 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3, d: 4 };

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest(나머지) 매개변수
// - 배열 형태로 여러 개의 인수를 저장
// - Rest 매개변수 뒤에는 추가적으로 매개변수를 선언할 수 없음
function funcB(one, two, ...ds) {
  console.log(ds);
}

funcB(...arr1);

//----------------------------------------------------------------------------------
// 📌chapter05. 원시타입 VS 객체타입

// 1. 원시 타입
// - 값 자체로써 변수에 저장되고 복사된다
// - 불변값 (메모리 값 수정 X)
let p1 = 1;
let p2 = p1;
p2 = 2;

// 2. 객체 타입
// - 참조값을 통해 변수에 저장되고 복사된다
// - 가변값 (메모리 값 수정 O)
let o1 = { name: "이정환" };
let o2 = o1;
o2.name = "홍길동";

// 3. 객체 타입 주의사항
// - 의도치 않게 값이 수정될 수 있다
// - 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다
// - 배열과 함수도 객체이다 (객체에 존재하는 프로퍼티와 메서드를 가지고 있음)

let o3 = o1; // 얕은 복사 (객체의 참조값을 복사, 원본 객체가 수정될 수 있어 위험)
let o4 = { ...o1 }; // 깊은 복사 (새로운 객체를 생성하면서 프로퍼티만 따로 복사, 원본 객체가 수정될 일이 없어 안전)

o1 === o3; // 얕은 비교 (참조값을 기준으로 비교)
o1 === o4;
JSON.stringify(o1) === JSON.stringify(o4); // 깊은 비교 (객체를 문자열로 변환하여 참조값이 아닌 프로퍼티의 값을 기준으로 비교)

//----------------------------------------------------------------------------------
// 📌chapter06. 반복문으로 배열과 객체 순회하기

// 1. 배열 순회
let arr3 = [1, 2, 3];

// 1-1. 배열 인덱스
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

// 1-2. for of
for (let item of arr3) {
  console.log(item);
}

// 2. 객체 순회
let person2 = { name: "이정환", age: 27, hobby: "테니스" };

// 2-1. Object.keys
// - 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person2);

for (let key of keys) {
  const value = person2[key];
  console.log(key, value);
}

// 2-2. Object.values
// - 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person2);

for (let value of values) {
  console.log(value);
}

// 2-3. for in
for (let key in person2) {
  const value = person2[key];
  console.log(key, value);
}

//----------------------------------------------------------------------------------
// 📌chapter07. 배열 메서드1. 요소 조작 (6가지)

// 1. push
// - 배열의 맨 뒤에 새로운 요소를 추가, 배열의 길이 반환
let arr4 = [1, 2, 3];
const newLength = arr4.push(4, 5, 6, 7);

// 2. pop
// - 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr5 = [1, 2, 3];
const poppedItem = arr5.pop();

// 3. shift
// - 배열의 맨 앞에 있는 요소를 제거, 반환
// - pop에 비해 느리게 동작
let arr6 = [1, 2, 3];
const shiftedItem = arr6.shift();

// 4. unshift
// - 배열의 맨 앞에 새로운 요소를 추가, 배열의 길이 반환
// - push에 비해 느리게 동작
let arr7 = [1, 2, 3];
const newLength2 = arr7.unshift(0);

// 5. slice
// - 인덱스를 사용하여, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr8 = [1, 2, 3, 4, 5];
let sliced = arr8.slice(2, 5);
let sliced2 = arr8.slice(2);
let sliced3 = arr8.slice(-3); // 뒤에서 3개

// 6. concat
// - 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr9 = [1, 2];
let arr10 = [3, 4];
let concatedArr = arr9.concat(arr10);

//----------------------------------------------------------------------------------
// 📌chapter08. 배열 메서드2. 요소 순회 및 탐색 (5가지)

// 1. forEach
// - 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr11 = [1, 2, 3];
let doubledArr = [];

arr11.forEach(function (item, idx, arr) {
  doubledArr.push(item * 2);
});

// 2. includes
// - 배열에 특정 요소가 있는지 확인하는 메서드
let arr12 = [1, 2, 3];
let isInclude = arr12.includes(10);

// 3. indexOf
// - 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드 (값이 없다면 -1 반환)
let arr13 = [2, 2, 2];
let index = arr13.indexOf(20);

// 4. findIndex
// - 모든 요소를 순회하면서, 콜백함수를 만족하는 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr14 = [1, 2, 3];
const findedIndex = arr14.findIndex((item) => item === 999);

// 5. find
// - 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr15 = [{ name: "이정환" }, { name: "홍길동" }];
const finded = arr15.find((item) => item.name === "이정환");

// 참고) indexOf vs findIndex
// - indexOf 메서드는 특정 값을 배열에서 찾을 때 얕은비교로 동작하기 때문에, 객체 값을 찾지 못한다
// - findIndex 메서드는 콜백함수에서 조건식을 이용해서 직접 프로퍼티의 값을 기준으로 비교할 수 있다
// - 단순한 원시 타입의 값을 찾을 때는 indexOf
// - 복잡한 객체 타입의 값을 찾을 때는 findIndex
let objectArr = [{ name: "이정환" }, { naem: "홍길동" }];
objectArr.indexOf({ name: "이정환" }); // -1
objectArr.findIndex((item) => item.name === "이정환"); // 0

//----------------------------------------------------------------------------------
// 📌chapter09. 배열 메서드 3. 배열 변형 (5가지)

// 1. filter
// - 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr16 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr16.filter((item, idx, arr) => item.hobby === "테니스");

// 2. map
// - 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값(반환값)들을 모아서 새로운 배열로 반환
let arr17 = [1, 2, 3];

const mapResult1 = arr17.map((item, idx, arr) => {
  return item * 2;
});

let names = arr16.map((item) => item.name);

// 3. sort
// - 원본 배열을 사전순으로 정렬
let arr18 = ["b", "a", "c"];
arr18.sort();

// 3-1. 숫자의 대소 관계를 기준으로 정렬하고 싶은 경우
// - 비교 기준을 판단하는 콜백함수 설정
let arr19 = [10, 3, 5];

// 오름차순
arr18.sort((a, b) => {
  if (a > b) {
    return 1; // 양수 반환 -> b, a 배치
  } else if (a < b) {
    return -1; // 음수 반환 -> a, b 배치
  } else {
    return 0; // a, b 자리를 그대로 유지
  }
});

// 내림차순
arr18.sort((a, b) => {
  if (a > b) {
    return -1; // a, b
  } else if (a < b) {
    return 1; // b, a
  } else {
    return 0;
  }
});

// 4. toSorted
// - 정렬된 새로운 배열을 반환
let arr20 = ["c", "a", "b"];
const sorted = arr20.toSorted();

// 5. join
// - 배열의 모든 요소를 하나의 문자열로 합쳐서 반환 (기본 구분자 ',')
let arr21 = ["hi", "im", "winterlood"];
const joined = arr21.join(" ");

//----------------------------------------------------------------------------------
// 📌chapter10. Date 객체와 날짜

// 1. Date 객체를 생성하는 방법 - 생성자
let date1 = new Date(); // 현재 시간
let date2 = new Date("1997-01-07/10:10:10"); // "1997. 01. 07", "1997/01/07"
let date3 = new Date(1997, 1, 7, 23, 59, 59);

// 2. 타임 스탬프
// - 특정 시간이 "UTC 1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
let date4 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 월은 0부터 시작
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 시간(시,분,초)은 제외하고 현재 날짜만
console.log(date1.toLocaleString()); // 현지화된 형태로

//----------------------------------------------------------------------------------
// 📌chapter11. 동기와 비동기

// 1. 동기
// - 여러 개의 작업을 순서대로, 하나씩 처리하는 방식 (Thread : 작업을 실행하고 처리해주는 역할)
// - 장점) 실행 흐름을 파악하기 쉽고 용이
// - 단점) 오래 걸리는 작업이라면 Thread가 해당 작업을 처리하기 전까지는 다음 작업을 진행할 수 없음 (전체 프로그램의 성능 악화)

// 2. 비동기
// - 작업을 순서대로 처리하지 않는 방식
// - 앞선 작업이 종료되지 않아도 기다릴 필요 없이 다른 작업을 동시에 진행시킬 수 있음

console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);

//----------------------------------------------------------------------------------
// 📌chapter12. 비동기 작업 처리하기 1. 콜백함수

// 1. 비동기 작업
function task() {
  setTimeout(() => {
    console.log("안녕하세요");
  }, 3000);
}

task();

// 2. 비동기 작업의 결과를 함수 외부에서 이용할 수 있도록 처리하는 방법
// - 매개변수로 콜백함수 전달
// - 비동기 함수 내에서 콜백함수를 호출하도록 설정
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value);
});

// 3. 비동기 작업의 결과를 다른 비동기 작업의 인수로 활용 가능
// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});

//----------------------------------------------------------------------------------
// 📌chapter13. 비동기 작업 처리하기 2. Promise

// 1. Promise
// - 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// - 기능: 비동기 작업 실행, 비동기 작업 상태 관리, 비동기 작엽 결과 저장 등

// 1-1. Promise의 3가지 상태
// - 대기(Pending) : 아직 작업이 완료되지 않은 상태
// - 성공(Fulfilled) : 비동기 작업이 성공한 상태
// - 실패(Rejected) : 비동기 작업이 실패한 상태
// - 해결(resolve) : 대기 -> 성공
// - 거부(reject) : 대기 -> 실패

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수 (executor)

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10); // 비동기 작업을 성공 상태로 바꾸는 함수, 결과값을 인수로 전달
      } else {
        reject("num이 숫자가 아닙니다"); // 비동기 작업을 실패 상태로 바꾸는 함수, 결과값을 인수로 전달
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    // Promis의 상태가 성공한 경우 then 메서드 호출, 결과값을 매개변수로 전달
    console.log(result);
    return add10(result); // 새로운 Promis 객체를 반환 (아무것도 반환하지 않았다면 원본 Promis 객체 반환)
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    // Promis의 상태가 실패한 경우 catch 메서드 호출, 결과값을 매개변수로 전달
    console.log(error);
  });

//----------------------------------------------------------------------------------
// 📌chapter14. 비동기 작업 처리하기 3. async/await

// 1. async
// - 함수를 비동기 함수로 만들어주는 키워드
// - 함수가 프로미스를 반환하도록 변환해주는 키워드
// - await와 함께 사용해야 효과적

// 1-1. 객체를 반환하는 동기 함수
// - 객체를 그대로 반환하지 않고, 객체를 결과값으로 갖는 Promis를 반환하는 비동기 함수로 변환
async function getData1() {
  return {
    name: "이정환",
    id: "winterlood",
  };
}

// 1-2. Promis를 반환하는 비동기 함수
// - Promis 객체 자체를 반환 (async가 별다른 기능을 하지 않음)
async function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 1500);
  });
}

// 2. await
// - async 함수 내부에서만 사용이 가능한 키워드
// - 비동기 함수가 다 처리되기를 기다리는 역할 (결과값 반환)
// - 비동기 작업을 마치 동기 작업을 처리하듯이 간결한 코드로 수행
async function printData() {
  const data = await getData2();
  console.log(data);
}

printData();
