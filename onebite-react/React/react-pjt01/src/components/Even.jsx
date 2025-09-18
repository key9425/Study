import { useEffect } from "react";

// 3. UnMount
// - 클린업, 정리함수 : useEffect의 콜백함수가 반환하는 함수
// - useEffect가 끝날 때 실행 (effect가 다시 실행되기 전 또는 UnMount 시 정리 작업)
const Even = () => {
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다</div>;
};

export default Even;
