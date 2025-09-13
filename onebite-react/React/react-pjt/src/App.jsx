import "./App.css";
import Header from "./components/Header"; // (ESM) vite로 만든 리액트 앱에서 확장자 생략 가능
import Main from "./components/Main";
import Footer from "./components/Footer";

// 컴포넌트
// - HTML 태그를 반환하는 함수 (함수 선언식, 화살표 함수)
// - 함수명 첫글자는 대문자!
// - 리액트 컴포넌트는 App 컴포넌트를 최상위 조상으로 갖는 계층 구조를 가짐 => Root 컴포넌트
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
