import { useSearchParams } from "react-router-dom";
// useSearchParams : Query String 값과 값을 변경할 수 있는 함수를 반환하는 커스텀 훅

const Home = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get("value"));

  return <div>Home</div>;
};

export default Home;
