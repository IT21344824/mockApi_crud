import React, { useEffect, useState } from 'react';
import { useParams, NavLink , useNavigate } from "react-router-dom";
import callApi from '../../api/api';
import ProductForm from './ProductForm';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        name: '',
        number: '',
        text: '',
    });

    useEffect(() => {
        callApi(`products/${id}`, 'GET', null)
            .then(response => {
                setInitialValues(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the product:', error);
            });
    }, [id]);

    const handleEdit = (values) => {
        callApi(`products/${id}`, 'PUT', values)
            .then(response => {
                console.log('Product updated:', response.data);
                navigate('/');
            })
            .catch(error => {
                console.error('There was an error updating the product:', error);
            });
    };

    return (
        <div className='py-10 ' style={{ width: "50%", margin: "auto" }}>
            <div className="row m-2 p-3">
                <p className="text-2xl font-bold whitespace-nowrap dark:text-white">Edit Product</p>
                <hr  className='rounded border-4'/>
                <br />
                <ProductForm initialValues={initialValues} onSubmit={handleEdit} />
            </div>
        </div>
    );
};

export default EditProduct;
