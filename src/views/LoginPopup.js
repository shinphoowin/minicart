import React, { useState } from "react";
import { Modal } from "semantic-ui-react";
import LoginForm from "../views/LoginForm";
import RegisterForm from "../views/RegisterForm";
import { connect } from "react-redux";

const LoginPopup = (props) => {
  //console.log(props);
  const { size, open, title, handleShowPopUp } = props;
  const [showregPopUp, setShowRegPopUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState("");

  const handleShowRegPopUp = () => {
    setShowRegPopUp(!showregPopUp);
  };

  const handleSubmit = (values) => {
    setLoading(!loading);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://localhost:3000");

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.token !== undefined) {
          localStorage.setItem("token", result.token);
          //dispatch(push(`/products/${type}`));
          handleShowPopUp(false);
          window.location.reload();
        }
        setLoginData("pls use correct username and password");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <Modal
      size={showregPopUp ? "small" : size}
      open={open}
      onClose={() => handleShowPopUp()}
    >
      <Modal.Header>
        {title}
        <p style={{ fontSize: 14, display: "block" }}>
          New member?{" "}
          <em onClick={() => handleShowRegPopUp()} className="linkColor">
            {" "}
            {showregPopUp ? "Login" : "Register"}
          </em>
        </p>
      </Modal.Header>

      <Modal.Content>
        {showregPopUp ? (
          <RegisterForm />
        ) : (
          <LoginForm
            handleSubmit={handleSubmit}
            loading={loading}
            loginData={loginData}
          />
        )}
      </Modal.Content>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(LoginPopup);
