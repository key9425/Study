import "./List.css";
import { useState, useMemo } from "react";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
  };

  const filteredTodos = getFilteredData();

  // useMemo
  // - "메모이제이션" 기법을 기반으로 불필요한 연산을 방지하여 최적화 하는 리액트 훅
  // - 두번째 인수로 전달한 deps를 기준으로 첫번째 인수로 전달한 콜백함수를 메모이제이션
  // - useMemo 호출의 결과값 = 콜백함수의 반환값

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    // - 메모이제이션하고 싶은 연산
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  // - 의존성배열(deps) : 배열에 포함된 값이 변경되었을 때만 콜백함수를 다시 실행
  // - 빈 deps인 경우 컴포넌트가 최초로 렌더링될 때만 실행

  return (
    <div className="List">
      <h4>Todo List 📝</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {/* 배열에 담긴 데이터를 리스트 형태로 렌더링 */}
        {/* 리스트 형태로 렌더링된 컴포넌트(요소)는 구분하기 위해 반드시 key라는 prop을 고유한 값으로 전달 */}
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};

export default List;
