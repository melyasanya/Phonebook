const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');
const { getToken } = require('redux/selectors');

export const PrivateRoute = ({ children }) => {
  const token = useSelector(getToken);

  return token ? children : <Navigate to="/login" />;
};
