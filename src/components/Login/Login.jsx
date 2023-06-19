import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/thunk';
import { getToken } from 'redux/selectors';

export const Login = () => {
  const auth = useSelector(getToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    auth && navigate('/contacts');
  }, [auth, navigate]);

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password } = e.target.elements;
    const loggedUser = {
      email: email.value,
      password: password.value,
    };
    dispatch(loginThunk(loggedUser));
  };
  console.log(auth);
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Log in
        </button>
      </form>
    </>
  );
};
