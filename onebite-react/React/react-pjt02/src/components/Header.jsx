import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// React.memo
// - 불필요한 리렌더링 방지
// - 컴포넌트를 인수로 받아, 최적화된 컴포넌트를 반환
// - props 기준으로 변경되지 않으면 리렌더링이 발생하지 않도록 메모이제이션

export default memo(Header);
