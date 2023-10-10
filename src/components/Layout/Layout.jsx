import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { getToken } from 'redux/selectors';
import { Container } from '@mui/material';

export const Layout = () => {
  const token = useSelector(getToken);
  const navigate = useNavigate();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      navigate('/register');
      setInitialLoad(false);
    }
  }, [navigate, initialLoad]);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <Container>
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
          </Container>
        </nav>
      </header>
      <main>
        <Container>
          {' '}
          <Outlet />
        </Container>
      </main>
    </>
  );
};
