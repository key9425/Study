// Props
// - 컴포넌트에 값을 전달하는 방법
// - 부모 컴포넌트에게 전달받은 값은 객체로 자식 컴포넌트의 매개변수로 제공

// Props 주의 사항
// - props로 어떠한 값이 반드시 전달될 것으로 예상하고 코드를 작성하는 것은 위험
// - 구조분해할당의 기본값을 이용

// children
// - 문자열, 숫자 같은 일반적인 값뿐만 아니라 HTML 요소나 컴포넌트까지도 전달 가능
// - 자식 요소로 배치되어 전달된 HTML 요소나 컴포넌트 -> children 이름의 props로 전달

const Button = ({ children, text, color = "black" }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
