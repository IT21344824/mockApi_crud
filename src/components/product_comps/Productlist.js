import React, { useState, useEffect } from "react";
import callApi from '../../api/api';
import Product from './Product';
//delete
import { onConfirm } from 'react-confirm-pro';
//--

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



  const deleteProduct = async (id) => {
    const defaultOptions = {
      title: (
        <h3>
          Are you sure?
        </h3>
      ),
      description: (
        <p>Do you really want to delete this records? This process cannot be undone.</p>
      ),
      onSubmit: async () => {
        callApi(`products/${id}`, 'DELETE', null)
          .then(() => {
            setProducts(products.filter(product => product.id !== id));
          })
          .catch(error => {
            console.error('There was an error deleting the product:', error);
          });
      },
      onCancel: () => {
        // alert("Cancel")
      },
    };
    onConfirm({
      ...defaultOptions,
      type: "dark",
      btnSubmit: "confirm ",
      btnCancel: "Cancle ",
      keyboardEvents: {
        escape: true,
        submit: true
      }
    })

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
            <Product key={product.id} product={product} onDelete={deleteProduct} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Productlist;
