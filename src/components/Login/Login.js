import { Button } from "@material-ui/core";
import React from "react";
import logo from "../../assets/logo.png";
import { useLocalContext } from "../../context/context";
import "./style.css";
const Login = () => {
  const { login, loggedInUser } = useLocalContext();

  console.log(loggedInUser);
  return (
    <div className="login">
      <div className="field">
        <label htmlFor="DoLiketoCode">Login as:</label>
        <div className="in">
          <input type="radio" className="type" name="status" value={true}/> Teacher
          <input type="radio" className="type" name="status" value={false}/> Student
        </div>
      </div>
      <Button variant="contained" color="default" onClick={() => login()}>
        Login Now!
      </Button>
    </div>
  );
};

export default Login;
