import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" onChange={onChangeCheckbox} checked={isDone} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// - todos 변경 -> App 컴포넌트 리렌더링 -> 함수 다시 생성 -> 새로운 함수로써 props 전달 -> memo를 적용하여도 리렌더링 발생
// - memo 메서드는 현재 props와 과거 props 값을 얕은 비교하기 때문에 객체 타입의 값은 다른 값으로 판단
// - 객체 타입의 값을 props로 받고 있는 컴포넌트는 memo 메서드를 적용하기만 해서는 최적화 X
// - 방법1. useCallback : 함수 자체를 메모이제이션하여 리렌더링되어도 다시 생성되지 않게 방지
// - 방법2. memo 함수의 두 번째 인수로 콜백함수를 전달하여 최적화 기능을 커스터마이징

export default memo(TodoItem, (prevProps, nextProps) => {
  // 매개변수로 과거의 props와 현재의 props를 전달
  // 반환값에 따라, Props가 바뀌었는지 판단
  // T -> Props 바뀌지 않음 -> 리렌더링 X
  // F -> Props 바뀜 -> 리렌더링 O

  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
});
