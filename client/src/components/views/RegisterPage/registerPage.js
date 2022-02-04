import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../_actions/user_action";

function RegisterPage(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); //refresh 되는 것을 방지하는 것.

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
    };

    //redux를 쓰지 않으면
    // axios.post("/api/users/register",body)로 연결하면 된다!

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        navigate("/login");
      } else {
        alert("Failed to sign up");
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
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email </label>
        <input type="email" value={Email} onChange={onEmailHandler} />

        <label> Name </label>
        <input type="text" value={Name} onChange={onNameHandler} />

        <label>Password </label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <label>Confirm Password </label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />

        <br />
        <button type="submit">회원 가입</button>
      </form>
    </div>
  );
}

export default RegisterPage;
