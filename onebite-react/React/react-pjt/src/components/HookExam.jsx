import useInput from "../hooks/useInput";

// React Hooks
// - 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록 도와주는 메서드들 (useState 같은 리액트의 내장 함수)
// - use라는 접두사가 붙음
// - 각 메서드는 Hook이라고 부름 (useState Hook, useRef Hook)

// 3가지 hook 관련된 Tip
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부(조건문, 반복문 내부)로 호출될 수는 없다
// 3. Custom Hook을 직접 만들 수 있다
//    - 리액트는 use라는 접두사를 사용하는 함수를 커스텀 훅이라고 판단
//    - 리액트 훅을 내부에서 호출하여도 오류를 발생하지 않음
//    - 컴포넌트 내부에 반복되는 로직, 훅을 사용하는 로직을 분리할 수 있음

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
