import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // 브라우저의 현재 주소를 저장 및 감지하는 역할
  // Context 객체의 Provider 컴포넌트를 이용해서 모든 컴포넌트에 페이지라우팅 데이터 공급
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
