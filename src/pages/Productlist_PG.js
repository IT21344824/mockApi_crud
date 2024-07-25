import React from 'react'
import Productslist from '../components/product_comps/Productlist';
import { Link } from "react-router-dom";


const Productlist_PG = () => {
    return (
        <div className="flex justify-center items-center w-full mt-10 flex-col">
            <div className="flex justify-between w-3/5 mb-2  ">
                <p className='flex items-center justify-center text-2xl font-bold ml-2'>Prodcut List</p>
                <Link to="/add" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add New
                </Link>
                
            </div>
            <hr  className='w-3/5 rounded border-4 mb-5'/>
            <Productslist />
        </div>
    )
}

export default Productlist_PG
