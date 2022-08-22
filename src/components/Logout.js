import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../store/user';

const Logout = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  const logoutHandler = () => {
    dispatch(userActions.logout());
  };
  return (
    <button
      onClick={logoutHandler}
      style={{ color: theme, borderColor: theme }}
    >
      Logout
    </button>
  );
};

export default Logout;
