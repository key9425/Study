import { useState, useRef } from "react";

// 사용자 입력 관리 - State
// - 초기값을 설정하는 경우도 존재 -> onChange 속성뿐만 아니라 value 속성까지 설정
// - 여러 개의 state를 객체로 묶어서 하나의 state로 통합해서 관리 -> 관련없는 값은 그대로 유지하는 것이 핵심

// useRef
// - 새로운 Reference 객체를 생성하는 기능, 컴포넌트 내부의 변수로 활용 가능
// - current 프로퍼티에 현재 보관할 값을 저장하는 단순한 JS 객체
// - 어떤 경우에도 리렌더링을 유발하지 않음 -> 렌더링에 영향을 미치지 않은 변수를 생성할 때 활용
// - 컴포넌트가 렌더링하는 특정 DOM 요소에 접근 및 조작 가능

// 자바스크립트 변수 (let) vs useRef
// - 리렌더링될 때마다 컴포넌트 함수가 다시 호출되어 변수 값이 리셋 됨
// - 변수를 컴포넌트 외부에 선언할 경우
//    - 컴포넌트를 한 번만 렌더링하는 경우에는 문제가 발생하지 않을 수 있음
//    - 컴포넌트를 두 번 이상 렌덩링하는 경우에는 치명적인 문제가 발생할 수 있음 -> 변수를 공유
//    - 파일 전체가 두 번 실행되는 것이 아니라 함수만 두 번 호출되기 때문
// - useRef, useState를 이용해서 만든 리액트의 특수한 변수는 컴포넌트가 리렌더링되어도 다시 리셋되지 않음

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);

    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (input.name === "") {
      inputRef.current.focus();
    }
  };

  // const [name, setName] = useState("초기값");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value);
  // };

  // const onChangeCountry = (e) => {
  //   setCountry(e.target.value);
  // };

  // const onChangeBio = (e) => {
  //   setBio(e.target.value);
  // };

  return (
    <div>
      <div>
        <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder="이름" />
      </div>

      <div>
        <input name="birth" value={input.birth} onChange={onChange} type="date" />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
