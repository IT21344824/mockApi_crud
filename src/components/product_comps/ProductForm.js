import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useParams , NavLink } from "react-router-dom";
import callApi from '../../api/api';

const ProductForm = ({ initialValues, onSubmit }) => {
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            number: Yup.number().required('Required'),
            text: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            onSubmit(values);
        },
        enableReinitialize: true,
    });

    return (
        <form onSubmit={formik.handleSubmit} style={{ width: "100%" }} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

            <label className="mt-4 block text-gray-700 text-sm font-bold mb-2">Quantity:</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="number"
                name="number"
                type="number"
                placeholder="Quantity"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
            />
            {formik.touched.number && formik.errors.number ? <div>{formik.errors.number}</div> : null}

            <label className="mt-4 block text-gray-700 text-sm font-bold mb-2">Description:</label>
            <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="text"
                name="text"
                placeholder="Description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.text}
            />
            {formik.touched.text && formik.errors.text ? <div>{formik.errors.text}</div> : null}

            <div className='flex justify-between'>
                <button
                    type="submit"
                    className="btn btn-primary mt-3 mr-2 p-1 hover:text-slate-950 text-gray-600 bg-green-400 hover:bg-green-300 rounded"
                >
                    Submit
                </button>
                <NavLink exact to="/">
                    <div className="btn btn-primary mt-3 p-1 hover:text-slate-950 text-gray-600 bg-red-400 hover:bg-red-300 rounded">
                        Close
                    </div>
                </NavLink>
            </div>
        </form>
    );
};

export default ProductForm;
