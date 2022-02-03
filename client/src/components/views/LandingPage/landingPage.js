import React, { useEffect } from "react";
import axios from "axios";
function LandingPage() {
  //useEffect는 LandingPage에 들어오자마자 그 안의 것을 실행한다는 뜻.
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response));
  }, []);
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
    </div>
  );
}

export default LandingPage;
