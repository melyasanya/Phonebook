import { Route, Routes } from 'react-router-dom';

import { ContactsWrapper } from './ContactsWrapper/ContactsWrapper';

import { Layout } from './Layout/Layout';
import { Login } from './Login/Login';
import { Registration } from './Registration/Registration';
import { UserInfo } from './UserInfo/UserInfo';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<ContactsWrapper />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Route>
    </Routes>
  );
};
