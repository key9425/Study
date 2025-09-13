import "./Jsx.css";

// JSX
// - 확장된 자바스크립트 문법
// - JS에서는 함수가 HTML 요소를 반환하면 문법적인 오류로 판단
// - 리액트에서는 JSX 문법 사용 -> JS와 HTML을 혼용하여 사용할 수 있음

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
//  - 자바스크립트 표현식: 숫자나 문자와 같이 값으로써 평가될 수 있는 식
//  - 조건문, 반복문을 작성할 수 없음, 오류 발생
// 2. 숫자, 문자열, 배열 값만 렌더링 된다
//  - 불리언, undefined, null은 오류를 발생시키진 않지만 렌더링 되지 않음
//  - 객체 값 그대로 렌더링할 수 없음, 오류 발생
// 3. 모든 태그는 닫혀있어야 한다
// 4. 최상위 태그는 반드시 하나여야만 한다

// JSX 스타일 설정 방법
// 1. 요소에 직접 스타일 속성을 설정
// 2. CSS 파일

const Jsx = () => {
  const user = {
    name: "이정환",
    isLogin: true,
  };

  // 조건에 따라 다른 UI 렌더링
  // - 조건문
  if (user.isLogin) {
    return (
      <div
        style={{
          backgroundColor: "red",
          borderBottom: "5px solid blue",
        }}
      >
        로그아웃
      </div>
    );
  } else {
    return <div className="login">로그인</div>;
  }

  // - 삼항연산자
  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Jsx;
