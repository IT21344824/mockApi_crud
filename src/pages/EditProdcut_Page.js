import React from 'react'
import EditProdcutcomp from '../components/EditProdcut';
import { Link } from "react-router-dom";
import Navbar from '../layouts/Navbar'


const EditProdcut_Page = () => {
  return (
    <div >
    <Navbar />
    
       
        <EditProdcutcomp />
    
    </div>
  )
}

export default EditProdcut_Page
