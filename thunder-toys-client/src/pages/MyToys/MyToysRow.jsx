import React from 'react';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyToysRow = ({mytoy, myToys, setMytoys}) => {
    const {_id,photo,toyName,sellerName,sellerEmail,subCategory,price,rating,quantity,description} = mytoy;


    const handleDelete = _id =>{

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if(result.isConfirmed){
        fetch(`https://thunder-toys-server.vercel.app/addtoy/${_id}`,{
          method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
        
          if(data.deletedCount > 0){
            Swal.fire(
              'Deleted!',
              'Your Toydata has been deleted.',
              'success'
          )
          const remaining = myToys.filter(toy => toy._id !== _id);
          setMytoys(remaining);
          }
        })
      }
    })

    }
    return (
        <tr>
            <th>
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo}  />
              </div>
            </div>
            
            </th>
            <td>{toyName}</td>
            <td>{sellerName}</td>
            <td>{sellerEmail}</td>
            <td>{subCategory}</td>
            <td>{price+'$'}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <td>{description}</td>
            <td><Link to={`/updateToy/${_id}`}><button className='btn btn-warning'>Update</button></Link></td>
            <td><button onClick={()=>handleDelete(_id)} className='btn btn-error'>Delete</button></td>
        </tr>
    );
};

export default MyToysRow;