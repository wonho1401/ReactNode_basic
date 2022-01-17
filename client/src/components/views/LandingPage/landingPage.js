import React, { useEffect } from "react";
import axios from "axios";
function LandingPage() {
  //useEffect는 LandingPage에 들어오자마자 그 안의 것을 실행한다는 뜻.
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response));
  }, []);
  return <div>Landing Page</div>;
}

export default LandingPage;
