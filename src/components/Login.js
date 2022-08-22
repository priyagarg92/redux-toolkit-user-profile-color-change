import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../store/user';

const Login = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  const loginHandler = () => {
    dispatch(
      userActions.login({ name: 'Alice', age: 25, email: 'alice@gmail.com' })
    );
  };
  return (
    <button onClick={loginHandler} style={{ color: theme, borderColor: theme }}>
      Login
    </button>
  );
};

export default Login;
