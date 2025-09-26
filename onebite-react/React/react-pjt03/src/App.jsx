import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/NotFound";

// 라우팅 설정 (브라우저 URL에 맞는 컴포넌트 렌더링)
// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
// 4. "*": wildcard, 라우터로 설정한 경로와 일치하는 경로가 없을 경우

// 주의사항
// 1. Routes 컴포넌트 내부에는 Route 컴포넌트만 사용할 수 있음
// 2. Routes 컴포넌트 외부에 배치된 요소는 라우팅과 관련없이 모든 페이지에 렌더링

// 페이지 이동 방법
// 1. Link
//    - 페이지를 이동시키는 컴포넌트
//    - HTML의 a태그를 대체 (a태그는 CSR 방식으로 페이지 이동을 제공하지 않음)
//    - React App 내부에서 링크 이용 시 Link 컴포넌트를 이용하는 것을 권장
// 2. useNavigate
//    - 페이지를 이동시키는 navigate 함수를 반환하는 커스텀 훅
//    - 함수(이벤트 핸들러 함수) 내부에서 페이지 이동

// 동적 경로
// 1. URL Parameter
//    - / 뒤에 아이템의 id를 명시
//    - id 등의 변경되지 않는 값을 주소로 명시하기 위해 사용
// 2. Query String
//    - ? 뒤에 변수명과 값 명시
//    - 검색어 등의 자주 변경되는 값을 주소로 명시하기 위해 사용

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <div>
        <button onClick={onClickButton}>New 페이지로 이동</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
