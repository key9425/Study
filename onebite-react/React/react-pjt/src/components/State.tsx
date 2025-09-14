// import { useState } from "react";
import Counter from "./Counter";
import Bulb from "./Bulb";

// State (상태)
// - 컴포넌트의 현재 상태를 정의하는 변수
// - 변화할 수 있는 동적인 값
// - useState 함수는 두개의 요소를 담은 배열을 반환
//  1.state의 값
//  2. 상태 변화 함수 (state의 값을 변경시키는 함수)

// 자바스크립트 일반 변수 (let, const)  vs State
// - 일반 변수의 값은 변경될 수 있지만 컴포넌트가 리렌더링 되지는 않음
// - 리액트의 컴포넌트는 State의 값이 변경되었을 때만 리렌더링 됨

// Re-Rendering (리렌더링)
// - 컴포넌트가 다시 렌더링 되는 상황
// - 컴포넌트의 state 값 변경 -> 컴포넌트 함수를 다시 호출 -> 업데이트 된 state 값을 반환하여 렌더링

// 리액트 컴포넌트의 리렌더링이 발생하는 상황
// 1. 자신이 관리하는 state의 값이 변경될 때
// 2. 제공받는 props의 값이 변경될 때
// 3. 부모 컴포넌트가 리렌더링 될 때
// - 불필요한 리렌더링 발생 (성능 저하) -> 관련없는 state는 각각 다른 컴포넌트로 분리

const State = () => {
  // const [count, setCount] = useState(0);
  // const [light, setLight] = useState("OFF");

  return (
    <>
      <Counter />
      <Bulb />
      {/* <Bulb light={light} /> */}
    </>
  );
};

export default State;
