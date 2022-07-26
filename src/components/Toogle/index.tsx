import { useState } from 'react';

import { useTheme } from '../../context/themeContext';
import theme from '../../context/theme';

import style from './style.module.scss';

export default function Toogle() {
  const [isChecked, setIsChecked] = useState(true);
  const { setChoosenTheme } = useTheme();
  const { setTextColor } = useTheme();

  const handleCheck = () => {
    setIsChecked((prevState) => !prevState);

    const newTheme = isChecked ? theme.light.backGround : theme.dark.backGround;
    const newTextColor = isChecked ? theme.light.color : theme.dark.color;

    setChoosenTheme(newTheme);
    setTextColor(newTextColor);
  };

  return (
    <label className={style.container}>
      <input type="checkbox" className={style.field} onChange={handleCheck} />
      <span className={style.slider} />
    </label>
  );
}
