import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  let navigate = useNavigate();
  //useEffect는 LandingPage에 들어오자마자 그 안의 것을 실행한다는 뜻.
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response));
  }, []);

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("로그아웃 실패");
      }
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>시작 페이지</h2>

      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}

export default LandingPage;
