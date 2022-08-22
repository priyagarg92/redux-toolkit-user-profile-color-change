import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeActions } from '../store/theme';

const Theme = () => {
  const [color, setColor] = useState('');
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.value);

  const changeColorHandler = () => {
    dispatch(themeActions.changeColor(color));
  };
  return (
    <div className="theme-section">
      <input type="text" onChange={(event) => setColor(event.target.value)} />
      <button onClick={changeColorHandler} style={{ borderColor: themeColor }}>
        Change Color
      </button>
    </div>
  );
};

export default Theme;
