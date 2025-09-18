import { useState, useEffect, useRef } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

// 리액트 컴포넌트의 라이프사이클 (3단계)
// 1. Mount (탄생) : 컴포넌트가 화면에 처음 렌더링 되는 순간
// 2. Update (변화) : 컴포넌트가 리렌더링 되는 순간
// 3. UnMount (죽음) : 컴포넌트가 렌더링에서 제외 되어 화면에서 사라지는 순간

// useEffect
// - 리액트 컴포넌트의 라이프사이클을 제어하는 React Hook
// - 의존성 배열 (dipendency array, deps) : 두번째 인수로 전달한 배열에 의존
// - 리액트의 State는 비동기로 업데이트되기 때문에 useEffect를 이용해야 변경된 State 값을 바로 이용할 수 있다

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  // 1. Mount
  // - deps로 빈 배열 전달
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. Update
  // - deps 생략
  // - mount 될 때 실행하고, 컴포넌트가 업데이트로 리렌더링 될 때마다 실행
  // - 컴포넌트의 업데이트 단계에서만 코드를 실행시키고 싶은 경우, useRef를 이용하여 레퍼런스 객체를 생성해서 플래그로써 사용
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  useEffect(() => {
    console.log(`count: ${count} / input: {${input}}`);
  }, [count, input]);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
