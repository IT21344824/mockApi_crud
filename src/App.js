import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductslistPG from './pages/Productlist_PG';
import AddProdcut_Page from './pages/AddProdcut_Page';
import EditProdcut_Page from './pages/EditProdcut_Page';
import Layout_1 from './layouts/Layout_1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout_1 />}>
          <Route index element={<ProductslistPG />} />
          <Route path="add" element={<AddProdcut_Page />} />
          <Route path="edit/:id" element={<EditProdcut_Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
