import "./Login.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tempcontext } from "../../../context/Tempcontext";

export const Login = () => {
  //  use reqres to log user in.
  const [data, setData] = useState([]);

  useEffect(() => {
    emp();
  }, []);
  async function emp() {
    let res = await fetch("https://bluefly-api.herokuapp.com/user");
    let data = await res.json();
    setData(data);
  }

  const [user, setUser] = useState({});
  const nav = useNavigate();
  const { isAuth, toggleAuth } = useContext(Tempcontext);
  function sendToken(e) {
    e.preventDefault();
    let a = false;
    data.map((e) => {
      console.log(user.email);
      if (e.username === user.email || e.password === user.password) {
        toggleAuth();
        nav(-2, { replace: true });
        a = true;
      }
    });
    if (a) {
      return;
    } else {
      alert("wrong email or password");
    }
  }
  const handelchange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="main" style={{ marginTop: "150px" }}>
      <h1 className="head1">LOGIN</h1>
      <form className="loginform" onSubmit={sendToken}>
        <label className="label">EMAIL</label>
        <br></br>
        <input
          name="username"
          type="text"
          placeholder=""
          className="login_username"
          onChange={handelchange}
        />
        <br></br>
        <br></br>
        <label className="label">PASSWORD</label>
        <br></br>
        <input
          name="password"
          type="password"
          placeholder=""
          className="login_username"
          onChange={handelchange}
        />
        <br></br>
        <br></br>
        <Link
          to={{
            pathname: `/`,
          }}
        >
          <input type="submit" value="SIGN IN" className="login_submit" />
        </Link>
      </form>
      <br></br>
      <Link to="/sign" textAlign="center">
        CREATE ACCOUNT
      </Link>
    </div>
  );
};
