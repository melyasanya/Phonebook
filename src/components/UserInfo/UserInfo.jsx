import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk, profileThunk } from 'redux/auth/thunk';
import { getProfileInfo } from 'redux/selectors';
import { delToken } from 'services/auth';

export const UserInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, [dispatch]);

  const profile = useSelector(getProfileInfo);
  const handleClick = () => {
    dispatch(logoutThunk());
    delToken();
  };

  return (
    <>
      <div>
        {profile && <p>{profile.email}</p>}
        <button onClick={handleClick}>Logout</button>
      </div>
    </>
  );
};
