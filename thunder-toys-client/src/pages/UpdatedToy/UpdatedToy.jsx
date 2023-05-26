import React from 'react';
import {
    useLoaderData
} from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from '../../hooks/useTitle';

const UpdatedToy = () => {

  useTitle('Update Toy')

    const toy = useLoaderData();
    
    const {_id, toyName, price, quantity, description} = toy;

    const handleUpdateToy = event =>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = {
            price, quantity, description
        }

        fetch(`https://thunder-toys-server.vercel.app/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toydata updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                }) 
            }
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5">
      <div className="card-body">
      <h1 className="text-3xl font-bold text-center"> {toyName}</h1>
        <form onSubmit={handleUpdateToy}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="text"
          name='quantity'
          defaultValue={quantity}
           placeholder="Quantity" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text"
          name='description'
          defaultValue={description}
           placeholder="Details" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-warning" type="submit" value="Update" />
        </div>
        </form>
      </div>
    </div>
  
</div>
    );
};

export default UpdatedToy;