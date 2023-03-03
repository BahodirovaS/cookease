import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSignUpMutation } from "./auth/authApi";
import { showModal, updateField, SIGN_UP_MODAL } from "./auth/accountSlice";
import { preventDefault } from "./auth/utils.js";
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { show, username, password, first_name, last_name } = useSelector(
    (state) => state.account
  );
  const modalClass = `my-modal ${show === SIGN_UP_MODAL ? "is-active" : ""}`;
  const [signUp, { error, isLoading: signUpLoading, isSuccess: signUpSuccess }] = useSignUpMutation();

  useEffect(() => {
    if (signUpSuccess) {
      navigate("/");
    }
  }, [signUpSuccess, navigate]);

  const field = useCallback(
    (e) =>
      dispatch(updateField({ field: e.target.name, value: e.target.value })),
    [dispatch]
  );

  return (
    <section className="vh-100 bg-image"
      style={{ backgroundImage: "url('https://i.imgur.com/NBJdjVd.jpeg')" }}>
      <div className={modalClass} key="signup-modal">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3"></div>
        <div className="account-container">
          <div className="account-form-container">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mkb-5">Create An Account</h2>
                <form
                  method="POST"
                  onSubmit={preventDefault(signUp, () => ({
                    username: username,
                    password,
                    first_name,
                    last_name,
                  }))}
                >
                  <div className="form-outline mb-4">
                    <label className="label" htmlFor="username">
                      Username
                    </label>
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
                  <div className="form-outline mb-4">
                    <label className="label">First name</label>
                    <div className="control">
                      <input
                        required
                        onChange={field}
                        value={first_name}
                        name="first_name"
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Your First Name"
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="label">Last name</label>
                    <div className="control">
                      <input
                        required
                        onChange={field}
                        value={last_name}
                        name="last_name"
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Your Last Name"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="control">
                      <button disabled={signUpLoading} className="account-btn">
                        Sign up!
                      </button>
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

export default SignUp;
