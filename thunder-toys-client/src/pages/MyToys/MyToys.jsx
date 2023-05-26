import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {

    useTitle('My Toys')

    const { user } = useContext(AuthContext);

    const email = user.email;

    const [myToys, setMytoys] = useState();

    useEffect(() => {
       fetch(`https://thunder-toys-server.vercel.app/addtoy/${email}`)
            .then(res => res.json())
            .then(data => {
                
                setMytoys(data)
            })
    }, [])

    return (
        <div className='mb-10'>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys?.map(mytoy =><MyToysRow
                            key={mytoy._id}
                            mytoy={mytoy}
                            myToys={myToys}
                            setMytoys={setMytoys}
                            ></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;