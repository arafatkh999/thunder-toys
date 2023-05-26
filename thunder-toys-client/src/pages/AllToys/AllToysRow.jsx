import React from 'react';
import { Link } from "react-router-dom";

const AllToysRow = ({alltoy}) => {
    const {_id, sellerName, toyName, subCategory, price, quantity } = alltoy;

    return (
        <tr>
            <th>{sellerName}</th>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/toy/${_id}`}><button className='btn btn-warning'>Details</button></Link></td>
        </tr>
    );
};

export default AllToysRow;