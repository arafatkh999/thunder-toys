import React, { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';

const AddAToy = () => {

    useTitle('Add a Toy')

    const {user} = useContext(AuthContext);

    const handleAddToy = event =>{
        event.preventDefault();
        const form = event.target;
        const photo = form.photourl.value;
        const toyName = form.toyname.value;
        const sellerName = form.sellername.value;
        const sellerEmail = user?.email;
        const subCategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const addAToy = {
            photo,toyName,sellerName,sellerEmail,subCategory,price,rating,quantity,description
        }

        

        fetch('https://thunder-toys-server.vercel.app/addtoy', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(addAToy)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                alert('Data added Successfully')
            }
        })
    }
    return (
        <div className='mb-10'>
            <form onSubmit={handleAddToy}>
                
                        <div className="card flex-shrink-0 w-1/2 mx-auto shadow-2xl bg-base-100">
                            <div className="card-body grid grid-cols-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Picture of toy</span>
                                    </label>
                                    <input type="text" name='photourl' placeholder="Picture of toy" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" name='toyname' placeholder="Toy Name" className="input input-bordered" />
                                   
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" name='sellername' defaultValue={user?.displayName} className="input input-bordered" />
                                   
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="text" name='selleremail' defaultValue={user?.email} className="input input-bordered" />
                                   
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub Category</span>
                                    </label>
                                    <input type="text" name='subcategory' placeholder="Sub-Category" className="input input-bordered" />
                                   
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name='price' placeholder="$Price" className="input input-bordered" />
                                   
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
                                   
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered" />
                                   
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" name='description' placeholder="Description" className="input input-bordered" />
                                   
                                </div>
                                <div className="form-control mt-9">
                                    
                                    <input className="btn btn-warning" type="submit" value="Add a Toy" />
                                </div>
                            </div>
                        </div>
                    
            </form>
        </div>
    );
};

export default AddAToy;