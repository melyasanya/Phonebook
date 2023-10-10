import { Navigate, Route, Routes } from 'react-router-dom';

import { ContactsWrapper } from './ContactsWrapper/ContactsWrapper';

import { Layout } from './Layout/Layout';
import { Login } from './Login/Login';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { Registration } from './Registration/Registration';
import { UserInfo } from './UserInfo/UserInfo';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Registration />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsWrapper />
            </PrivateRoute>
          }
        />
        <Route
          path="/userinfo"
          element={
            <PrivateRoute>
              <UserInfo />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
