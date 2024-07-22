import React, { useState, useEffect } from "react";
import callApi from '../api/api';
import Product from './Product';

const Productlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    callApi('products', 'GET', null)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products:', error);
      });
  }, []);

  const deleteProduct = (id) => {
    callApi(`products/${id}`, 'DELETE', null)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the product:', error);
      });
  };
  
  return (
    <div class="relative overflow-x-auto">
     <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
           
          <tr>
          <th scope="col" class="px-6 py-3 mr-5">Name</th>
          <th scope="col" class="px-6 py-3 mr-5">Quantity</th>
          <th scope="col" class="px-6 py-3 mr-5">description</th>
          <th scope="col" class="px-6 py-3 mr-5">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <Product key={product.id} product={product} onDelete={deleteProduct}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Productlist;
