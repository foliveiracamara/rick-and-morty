import { createContext, useContext, useEffect, useState } from 'react';

import theme from './theme'

interface IChoosenTheme {
  choosenTheme: string | object;
  textColor: string | object;
}

interface IThemeContextProvider {
  children: React.ReactNode;
}

export const ThemeContext = createContext<any>({});

export const ThemeContextProvider = ({ children }: IThemeContextProvider) => {
  const [choosenTheme, setChoosenTheme] = useState<IChoosenTheme>();
  const [textColor, setTextColor] = useState<IChoosenTheme>();

  useEffect(() => {
    setChoosenTheme(theme.dark.backGround)
    setTextColor(theme.dark.color);
    
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        choosenTheme,
        setChoosenTheme,
        textColor,
        setTextColor
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
