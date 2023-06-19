import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk, profileThunk } from 'redux/auth/thunk';
import { getProfileInfo } from 'redux/selectors';

export const UserInfo = () => {
  const dispatch = useDispatch();
  dispatch(profileThunk());
  const profile = useSelector(getProfileInfo);
  const handleClick = () => {
    dispatch(logoutThunk());
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
