import randomcolor from "randomcolor"; // (라이브러리) 경로가 아닌 이름 명시
import mul, { add, sub } from "./math.js"; // (ESM) 모듈의 확장자까지 명시
// const [add, sub] = require("./math"); // (CJS)

const color = randomcolor();
console.log(color);

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));
