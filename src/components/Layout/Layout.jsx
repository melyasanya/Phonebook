import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { getToken } from 'redux/selectors';

export const Layout = () => {
  const token = useSelector(getToken);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {!token && (
                <>
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
                </>
              )}
              {token && (
                <>
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
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
