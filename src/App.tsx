import { useContext, useEffect } from 'react';

import { ThemeContextProvider } from './context/themeContext';
import { ThemeContext } from './context/themeContext';

import Home from './pages/Home';

import themeSchema from './context/theme'

import './App.css';

export default function App() {
  const theme = useContext(ThemeContext);
  const themeSchemaColor = themeSchema[theme[0]]
  const teste = theme[0]

  console.log('teste', teste)
  console.log(theme)
  useEffect(() => {

  }, [teste, theme[0]])

  return (
    <ThemeContextProvider>
      <div className="app" style={{ background: `${themeSchemaColor.backGround}`}}>
        <Home />
      </div>
    </ThemeContextProvider>
  );
}
