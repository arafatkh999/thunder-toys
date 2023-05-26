import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import AllToysRow from './AllToysRow';

const AllToys = () => {

    const alltoys = useLoaderData();

    useTitle('All Toys')


    return (
        <div className='mb-10'>
            <div className='flex justify-center my-3'>
                <div className="form-control">
                    <div className="input-group">
                        <input
                         type="text" placeholder="Enter Toy Name" className="input input-bordered" />
                        <button className="btn btn-warning">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Show Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alltoys.map(alltoy => <AllToysRow
                                key={alltoy._id}
                                alltoy={alltoy}
                            ></AllToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;