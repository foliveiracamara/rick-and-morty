import { createContext, useState } from 'react';

import theme from './theme';

interface IThemeContextProvider {
  children: React.ReactNode;
}

export const ThemeContext = createContext(['dark']);

export const ThemeContextProvider = ({ children }: IThemeContextProvider) => {
  const themeState = useState('dark')
  console.log(themeState)

  //@ts-ignore
  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
};
