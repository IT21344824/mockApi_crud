import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => setThemeMode('dark');
  const lightTheme = () => setThemeMode('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setThemeMode(savedTheme);
    document.querySelector('html').classList.add(savedTheme);
  }, []);

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}
