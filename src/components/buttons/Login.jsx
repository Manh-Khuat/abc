import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const history = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [users, setUser] = useState(JSON.parse(localStorage.getItem("users")))

  const handleClickLogin = () => {
    const nameUser = users.some(user => {
      return user.email === email
    })
    const passUser = users.some(user => {
      return user.password === password
    })
    
    nameUser && passUser  ? history("/") : alert("Kiểm tra lại tài khoản , mật khẩu")
  }
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-outline-primary ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
          <span className="fa fa-sign-in me-1"></span>
        Login
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                <button className="btn btn-primary w-100 mb-4">
                    <span className="fa fa-google me-2"></span> Sign in With Google
                </button>
                <button className="btn btn-primary w-100 mb-4">
                    <span className="fa fa-facebook me-2"></span> Sign in With Facebook
                </button>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword2"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button onClick={handleClickLogin} type="submit" className="btn btn-outline-primary w-100 mt-5">
                  Submit
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
