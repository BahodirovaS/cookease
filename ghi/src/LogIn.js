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
    <section class="login-section">
      <div class="account-container">
        <div class="account-form-container">
          <div class="card">
            <div class="card-body p-5 h-100 d-flex flex-column justify-content-center">
              <h2 class="text-center mkb-5">Log in</h2>
              {error && <div class="alert alert-danger">{error}</div>}
              <form method="POST" onSubmit={handleLogIn}>
                <div class="form-outline mb-4">
                  <label class="label" htmlFor="username">Username</label>
                  <div class="control">
                    <input
                      required
                      onChange={field}
                      value={username}
                      name="username"
                      class="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div class="form-outline mb-4">
                  <label class="label">Password</label>
                  <div class="control">
                    <input
                      required
                      onChange={field}
                      value={password}
                      name="password"
                      class="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <div class="control">
                    <button disabled={logInLoading} class="account-btn">Log In</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default LogIn;
