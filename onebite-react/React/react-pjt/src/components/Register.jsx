import { useState } from "react";
// 사용자 입력 관리 - State
// - 초기값을 설정하는 경우도 존재 -> onChange 속성뿐만 아니라 value 속성까지 설정
// - 여러 개의 state를 객체로 묶어서 하나의 state로 통합해서 관리 -> 관련없는 값은 그대로 유지하는 것이 핵심

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // const [name, setName] = useState("초기값");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value);
  // };

  // const onChangeCountry = (e) => {
  //   setCountry(e.target.value);
  // };

  // const onChangeBio = (e) => {
  //   setBio(e.target.value);
  // };

  return (
    <div>
      <div>
        <input name="name" value={input.name} onChange={onChange} placeholder="이름" />
      </div>

      <div>
        <input name="birth" value={input.birth} onChange={onChange} type="date" />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
    </div>
  );
};

export default Register;
