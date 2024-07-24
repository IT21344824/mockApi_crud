import React, { useState, useEffect } from "react";
import callApi from '../../api/api';
import MUIDataTable from "mui-datatables";
import { NavLink } from "react-router-dom";
import { onConfirm } from 'react-confirm-pro';

const Productlist = () => {
  const [products, setProducts] = useState([]);

  //get all prodcuts
  useEffect(() => {
    callApi('products', 'GET', null)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products:', error);
      });
  }, []);


  //delete prodcut
  const deleteProduct = async (id) => {
    const defaultOptions = {
      title: (
        <h3>
          Are you sure?
        </h3>
      ),
      description: (
        <p>Do you really want to delete this record? This process cannot be undone.</p>
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
        // Handle cancel action
      },
    };
    onConfirm({
      ...defaultOptions,
      type: "dark",
      btnSubmit: "Confirm",
      btnCancel: "Cancel",
      keyboardEvents: {
        escape: true,
        submit: true
      }
    })
  };

  // columns / header
  const columns = [
    {
      name: "id",
      label: "No",
      options: {
        filter: true,
        sort: true,
       
      }
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "number",
      label: "Quantity",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "text",
      label: "Description",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          const productId = products[tableMeta.rowIndex].id;
          return (
            <div>
              <NavLink to={`/edit/${productId}`}>
                <button className="btn btn-primary mr-3 p-1 hover:text-slate-950 text-gray-600 bg-green-400 hover:bg-green-300 rounded">
                  Edit
                </button>
              </NavLink>
              <button className="btn btn-primary p-1 hover:text-slate-950 text-gray-600 bg-red-400 hover:bg-red-300 rounded"
                onClick={() => deleteProduct(productId)}>
                Delete
              </button>
            </div>
          );
        }
      }
    },
  ];

  const options = {
    selectableRows: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 30],
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-3/5">
        <MUIDataTable
          title={"Product List"}
          data={products}
          columns={columns}
          options={options}
          className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 
          shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        />
      </div>
    </div>
  );
}

export default Productlist;
