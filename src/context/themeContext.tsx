import { createContext, useContext, useEffect, useState } from 'react';
import theme from './theme'

interface IChoosenTheme {
  choosenTheme: string | object;
}

interface IThemeContextProvider {
  children: React.ReactNode;
}

export const ThemeContext = createContext<any>({});

export const ThemeContextProvider = ({ children }: IThemeContextProvider) => {
  const [choosenTheme, setChoosenTheme] = useState<IChoosenTheme>();

  useEffect(() => {
    return setChoosenTheme(theme.dark.backGround);
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        choosenTheme,
        setChoosenTheme,
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
