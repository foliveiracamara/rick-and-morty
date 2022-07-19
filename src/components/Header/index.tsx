import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/themeContext';

import style from './style.module.scss';

export default function Header() {
  const [theme, setTheme] = useContext(ThemeContext)
  const [isChecked, setIsChecked] = useState(false)
  
  const handleCheck = () => {
    setIsChecked((prevState) => !prevState)
    const newTheme = isChecked ? 'light' : 'dark'
    setTheme(newTheme) 
    console.log(theme)
    console.log(isChecked)
  }

  const currentTheme = () => {
    if(isChecked) {
    }
  }
  
  return (
    <div className={style.container}>
        <label onClick={handleCheck}>oi</label>
    </div>
  );
} 
