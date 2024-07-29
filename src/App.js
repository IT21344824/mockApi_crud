import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductslistPG from './pages/Productlist_PG';
import AddProdcut_Page from './pages/AddProdcut_Page';
import EditProdcut_Page from './pages/EditProdcut_Page';
import Layout_1 from './layouts/Layout_1';
import { ThemeProvider } from './contexts/theme';
import { useEffect, useState } from 'react';

function App() {
  const [themeMode, setThemeModel] = useState('light');

  const darkTheme = () => {
    setThemeModel('dark')
  }

  const lightTheme = () => {
    setThemeModel('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', "light")
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout_1 />}>
            <Route index element={<ProductslistPG />} />
            <Route path="add" element={<AddProdcut_Page />} />
            <Route path="edit/:id" element={<EditProdcut_Page />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
