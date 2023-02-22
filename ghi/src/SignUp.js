import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSignUpMutation } from "./auth/authApi";
import { showModal, updateField, SIGN_UP_MODAL } from "./auth/accountSlice";
// import Notification from "./Notification";
import { preventDefault } from "./auth/utils.js";

function SignUp() {
  const dispatch = useDispatch();
  const { show, username, password, first_name, last_name } = useSelector(
    (state) => state.account
  );
  const modalClass = `modal ${show === SIGN_UP_MODAL ? "is-active" : ""}`;
  const [signUp, { error, isLoading: signUpLoading }] = useSignUpMutation();
  const field = useCallback(
    (e) =>
      dispatch(updateField({ field: e.target.name, value: e.target.value })),
    [dispatch]
  );

  return (
    <div className={modalClass} key="signup-modal">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box content">
          <h3>Sign Up</h3>
          {/* {error ? (
            <Notification type="danger">{error.data.detail}</Notification>
          ) : null} */}
          <form
            method="POST"
            onSubmit={preventDefault(signUp, () => ({
              username: username,
              password,
              first_name,
              last_name,
            }))}
          >
            <div className="field">
              <label className="label" htmlFor="username">
                Username
              </label>
              <div className="control">
                <input
                  required
                  onChange={field}
                  value={username}
                  name="username"
                  className="input"
                  type="text"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  required
                  onChange={field}
                  value={password}
                  name="password"
                  className="input"
                  type="password"
                  placeholder="secret..."
                />
              </div>
            </div>
            <div className="field">
              <label className="label">First name</label>
              <div className="control">
                <input
                  required
                  onChange={field}
                  value={first_name}
                  name="first_name"
                  className="input"
                  type="text"
                  placeholder="Your First Name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Last name</label>
              <div className="control">
                <input
                  required
                  onChange={field}
                  value={last_name}
                  name="last_name"
                  className="input"
                  type="text"
                  placeholder="Your Last Name"
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button disabled={signUpLoading} className="button is-primary">
                  Submit
                </button>
              </div>
              <div className="control">
                <button
                  type="button"
                  onClick={() => dispatch(showModal(null))}
                  className="button"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
