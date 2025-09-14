// Props
// - 컴포넌트에 값을 전달하는 방법
// - 부모 컴포넌트에게 전달받은 값은 객체로 자식 컴포넌트의 매개변수로 제공

// Props 주의 사항
// - props로 어떠한 값이 반드시 전달될 것으로 예상하고 코드를 작성하는 것은 위험
// - 구조분해할당의 기본값을 이용

// children
// - 문자열, 숫자 같은 일반적인 값뿐만 아니라 HTML 요소나 컴포넌트까지도 전달 가능
// - 자식 요소로 배치되어 전달된 HTML 요소나 컴포넌트 -> children 이름의 props로 전달

// Event
// - 웹 내부에서 발생하는 사용자의 행동
// - 이벤트 핸들링 : 이벤트가 발생했을 때 그것을 처리하는 것
// - 이벤트 핸들러 : 이벤트를 처리하는 함수
// - 호출된 이벤트 핸들러 함수에 매개 변수로 이벤트 객체를 제공

const Button = ({ children, text, color = "black" }) => {
  const onClickButton = (e) => {
    console.log(text);
    console.log(e); // 이벤트 객체
  };

  return (
    <button
      onClick={() => {
        console.log(text);
      }}
      onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
