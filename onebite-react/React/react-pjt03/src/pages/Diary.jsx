import { useParams } from "react-router-dom";
// useParams : 현재 브라우저에 명시한 URL Parameter 값을 객체 형태로 반환하는 커스텀 훅

const Diary = () => {
  const params = useParams();
  return <div>{params.id}번 일기입니다</div>;
};

export default Diary;
