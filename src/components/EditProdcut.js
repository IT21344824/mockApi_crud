import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from "react-router-dom";
import  callApi  from '../api/api';

const EditProduct = () => {
    const { id } = useParams();

    const initialValues = {
        name: '',
        number: '',
        text: '',
    };

    const [data, setData] = useState(initialValues);

    //get the id - data
    useEffect(() => {
        callApi(`products/${id}`, 'GET', null)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the product:', error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setData({
            ...data,
            [id]: value,
        });
    };

    //update the id - data
    const handleEdit = () => {
        callApi(`products/${id}`, 'PUT', data)
            .then(response => {
                console.log('Product updated:', response.data);
                
            })
            .catch(error => {
                console.error('There was an error updating the product:', error);
            });
    };

    return (
        <div style={{ width: "50%", margin: "auto" }}>
            <div className="row m-2 p-3">
                <p className="text-2xl font-bold whitespace-nowrap dark:text-white">Edit Product</p>
                <hr/>
                <br/>
                <form style={{ width: "100%" }} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <label 
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >Name : </label>
                    <input
                       class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                       id="name" placeholder="Name"
                        value={data.name || ""}
                        onChange={handleInputChange}
                    />
                    <label                     
                    class="mt-4 block text-gray-700 text-sm font-bold mb-2"
                    >Quantity : </label>
                    <input
                       class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                       type="text" placeholder="qty"
                        id="number"
                        value={data.number || ""}
                        onChange={handleInputChange}
                    />
                    <label            
                    class="mt-4 block text-gray-700 text-sm font-bold mb-2"
                    >Description : </label>
                    <input
                       class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                       id="text" placeholder="DESCRIPTION"
                        value={data.text || ""}
                        onChange={handleInputChange}
                    />

                    <div className='flex justify-between'>
                          <NavLink exact to="/">
                        <button
                            type="button"
                            className="btn btn-primary mt-3 mr-2 p-1 hover:text-slate-950 text-gray-600 bg-green-400 hover:bg-green-300  rounded"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                    </NavLink>
                    <NavLink exact to="/">
                        <div className="btn btn-primary mt-3 p-1 hover:text-slate-950 text-gray-600 bg-red-400 hover:bg-red-300  rounded"
                        >Close</div>
                    </NavLink>
                    </div>
                  
                </form>
            </div>
        </div>
    );
};

export default EditProduct;
