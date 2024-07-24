import React from 'react'
import Productslist from '../components/product_comps/Productlist';
import { Link } from "react-router-dom";


const Productlist_PG = () => {
    return (
        <div className="flex justify-center items-center w-full mt-10 flex-col">
            <div className="flex justify-start w-3/5 mb-10">
                <Link to="/add" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add New
                </Link>
            </div>
            <Productslist />
        </div>
    )
}

export default Productlist_PG
