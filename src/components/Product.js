import React from 'react';
import { NavLink } from "react-router-dom";

const Product = ({ product , onDelete  }) => {
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td class="px-6 py-4">
        {product.name}</td>
      <td class="px-6 py-4">{product.number}</td>
      <td class="px-6 py-4">{product.text}</td>
      <td class="px-6 py-4">
        <NavLink to={`/edit/${product.id}`}>
          <button className="btn btn-primary mr-3">Edit</button>
        </NavLink>
        <button className="btn btn-primary" onClick={() => onDelete(product.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Product;
