import { useReducer } from "react";

// useReducer
// - 컴포넌트 내부에 새로운 State를 생성하는 React Hook
// - 모든 useState는 useReducer로 대체 가능

// useReducer vs useState
// - 리액트 컴포넌트의 메인 역할 : UI 렌더링
// - useState : 컴포넌트 내부에 상태 관리 코드를 작성 -> 코드가 복잡할 경우 가독성이 떨어지고 유지보수도 어려움
// - useReducer : 컴포넌트 외부에 상태 관리 코드를 분리할 수 있음 -> 컴포넌트 내부를 간결하게 유지 가능

// 2. useReducer가 상태 변화를 실제로 처리하게 될 reducer 함수 호출
// - reducer : 상태를 실제로 변화시키는 변환기 역할을 하는 함수
// - 매개변수로 현재의 state 값, action 객체 제공
// - 새로운 state 값 반환을 통해 변경
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const ExamReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  // 1. 컴포넌트 내부에서 dispatch 함수를 호출해서 상태 변화 요청
  // - dispatch : 상태 변화가 있어야 한다는 사실을 알리는(발송하는) 함수
  // - 액션 객체(요청의 내용을 담고 있는 객체)를 인수로 전달
  const onClickPlus = () => {
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default ExamReducer;
