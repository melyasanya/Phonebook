import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'services/auth';

export const Registration = () => {
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const newUser = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    signUp(newUser)
      .then(() => {
        Notify.success('User has been registered successfuly');
        navigate('/login');
      })
      .catch(error => {
        Notify.failure(error);
      });

    name.value = '';
    email.value = '';
    password.value = '';
  };

  return (
    <>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleInputName1"
          />
        </div>
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
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
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
          Register
        </button>
      </form>
    </>
  );
};
