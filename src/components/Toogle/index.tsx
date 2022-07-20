import { useState } from 'react';

import { useTheme } from '../../context/themeContext';
import theme from '../../context/theme';

import style from './style.module.scss';

export default function Toogle() {
  const [isChecked, setIsChecked] = useState(true);
  const { setChoosenTheme } = useTheme();

  const handleCheck = () => {
    setIsChecked((prevState) => !prevState);
    const newTheme = isChecked ? theme.light.backGround : theme.dark.backGround;
    setChoosenTheme(newTheme);
  };

  return (
    <label className={style.container}>
      <input type="checkbox" className={style.field} onChange={handleCheck} />
      <span className={style.slider} />
    </label>
  );
}
