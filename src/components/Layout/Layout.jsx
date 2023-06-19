import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacts">
                  Contacts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/userinfo">
                  User Info
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
