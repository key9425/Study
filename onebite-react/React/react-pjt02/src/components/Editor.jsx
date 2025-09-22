import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  // useContext : 인수로 전달한 Context로부터 공급된 데이터를 반환하는 React Hook
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (!content) {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input ref={contentRef} value={content} onChange={onChangeContent} onKeyDown={onKeydown} placeholder="새로운 Todo..." />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
