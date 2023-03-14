import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLogInMutation } from "./auth/authApi";
import { showModal, updateField, LOG_IN_MODAL, updateToken } from "./auth/accountSlice";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import './assets/css/main.css'




function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const { show, username, password } = useSelector((state) => state.account);
  const modalClass = `my-modal ${show === LOG_IN_MODAL ? "is-active" : ""}`;
  const [logIn, { isLoading: logInLoading }] = useLogInMutation();

  const handleLogIn = async (e) => {
    e.preventDefault();
    const { data, error } = await logIn({ username, password })
    if (error) {
      setError("Incorrect username or password")
    }
    else {
      dispatch(showModal(null));
      dispatch(updateToken(data.token));
      navigate("/")
    }
  }

  const field = useCallback(
    (e) =>
      dispatch(updateField({ field: e.target.name, value: e.target.value })),
    [dispatch]
  );


  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage: "url('https://i.imgur.com/NBJdjVd.jpeg')"
      }}
    >
      <div className={modalClass} key="login-modal">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3"></div>
        <div className="account-container">
          <div className="account-form-container">
            <div className="card" style={{ borderRadius: "15px", height: "100%" }}>
              <div className="card-body p-5 h-100 d-flex flex-column justify-content-center">
                <h2 className="text-center mkb-5" style={{ fontFamily: "Amatic SC, sans-serif", fontSize: "60px" }}>Log in</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form method="POST" onSubmit={handleLogIn}>
                  <div className="form-outline mb-4">
                    <label className="label" htmlFor="username" >Username</label>
                    <div className="control">
                      <input
                        required
                        onChange={field}
                        value={username}
                        name="username"
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="label">Password</label>
                    <div className="control">
                      <input
                        required
                        onChange={field}
                        value={password}
                        name="password"
                        className="form-control form-control-lg"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="control">
                      <button disabled={logInLoading} className="account-btn">Log In</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export default LogIn;
