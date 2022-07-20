import { ThemeContextProvider } from './context/themeContext';

import Home from './pages/Home';

import './App.css';

export default function App() {
  return (
    <ThemeContextProvider>
      <div className="app">
        <Home />
      </div>
    </ThemeContextProvider>
  );
}
