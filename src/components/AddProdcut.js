import React from 'react'
import { useFormik } from 'formik'
import  callApi  from '../api/api';
import axios from 'axios';


const AddProdcut = () => {

    const initialValues = {
        name: '',
        number: '',
        text: '',
    }
    const onSubmit = values => {
        console.log('log', values)
        callApi('products', 'POST', values)
        .then(response => {
          console.log('Product added:', response.data);
          // Optionally reset the form or handle post-submission logic here
          formik.resetForm();
        })
        .catch(error => {
          console.error('There was an error adding the product:', error);
        });
    }
    const validate = values => {
        let error = {}
        if (!values.name) {
            error.name = 'Required'
        }
        if (!values.number) {
            error.number = 'Required'
        } else if (isNaN(values.number)) {
            error.number = 'enter number '
        }
        if (!values.text) {
            error.text = 'Required'
        }
        return error
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit} class="max-w-sm mx-auto mt-10">
                <div class="mb-5">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">name</label>
                    <input type="name" id="name" onChange={formik.handleChange} value={formik.values.name}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name" required />
                    {formik.errors.name ? <div class=' text-red-500'> {formik.errors.name}</div> : null}
                </div>
                <div class="mb-5">
                    <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">qty</label>
                    <input type="number" id="number" onChange={formik.handleChange} value={formik.values.number}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="quantity" required />
                    {formik.errors.number ? <div class=' text-red-500'> {formik.errors.number}</div> : null}

                </div>
                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
                    <input type="text" id="text" onChange={formik.handleChange} value={formik.values.text}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="description.." required />
                    {formik.errors.text ? <div class=' text-red-500'> {formik.errors.text}</div> : null}

                </div>
              
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default AddProdcut
