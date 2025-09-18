import "./App.css";
import { useState, useRef } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

// 임시 데이터
// - 컴포넌트가 리렌더링 될 때마다 다시 생성될 필요 없음
// - 상수이기 때문에 값 변경 불가
// -> 컴포넌트 외부 선언
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "Recat 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래연습하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };

    // state 값은 반드시 상태변화함수를 호출해서 수정
    // -> 변경된 state 값을 리액트가 감지하여 컴포넌트를 정상적으로 리렌더링 할 수 있음
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
