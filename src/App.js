import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import ProductslistPG from './pages/Productlist_PG';
import AddProdcut from './pages/AddProdcut_Page';
import EditProdcut from './pages/EditProdcut_Page';




function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route  path="/">         

          {/* <Route path="Employees" > */}
            <Route index element={ <ProductslistPG />} />
            <Route path="/add" element={ <AddProdcut />} />
            <Route path="/edit/:id" element={ <EditProdcut />} />

          {/* </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
