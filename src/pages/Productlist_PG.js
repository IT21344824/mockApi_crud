import React from 'react'
import Productslist from '../components/Productlist';
import { Link } from "react-router-dom";
import Navbar from '../layouts/Navbar'


const Productlist_PG = () => {
    return (
        <div >
        <Navbar />
        <div className="flex justify-center items-center mt-10 flex-col">
         
            <div className="flex mb-10">
               
                <Link to="/add" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                    Add New
                </Link>
            </div>
           
            <Productslist />
        </div>
        </div>
    )
}

export default Productlist_PG
