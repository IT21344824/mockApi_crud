import React from 'react'
import AddProdcut from '../components/AddProdcut';
import { Link } from "react-router-dom";
import Navbar from '../layouts/Navbar'


const AddProdcut_Page = () => {
  return (
    <div >
    <Navbar />
    
       
        <AddProdcut />
    
    </div>
  )
}

export default AddProdcut_Page
