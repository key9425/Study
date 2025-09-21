import "./App.css";
import { useRef, useReducer, useCallback } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
// import ExamReducer from "./components/ExamReducer";

// React App 내부의 최적화 방법
// - 컴포넌트 내부의 불필요한 연산 방지 -> useMemo
// - 컴포넌트 내부의 불필요한 함수 재생성 방지 -> useCallback
// - 컴포넌트의 불필요한 리렌더링 방지 -> React.memo

// 최적화 기준
// - 프로젝트를 완성한 상태에서 최적화 (1.기능 -> 2.최적화)
// - 최적화가 필요할 것 같은 연산, 함수, 컴포넌트에만 적용

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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => (item.id === action.targetId ? { ...item, isDone: !item.isDone } : item));
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // useCallback
  // - 불필요한 함수 재생성 방지
  // - 첫번째 인수로 전달한 콜백함수를 생성해서 반환
  // - deps에 포함된 값이 변경되었을 때만 함수를 다시 생성하도록 최적화
  // - 빈 deps인 경우 컴포넌트가 마운트될 때만 함수를 생성

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      {/* <ExamReducer /> */}
    </div>
  );
}

export default App;
