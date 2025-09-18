import "./App.css";
import { useState } from "react";
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

  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
