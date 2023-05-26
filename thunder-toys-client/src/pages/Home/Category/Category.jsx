import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";

const Category = () => {

    const [categories, setCategories] = useState();

    useEffect(() => {
        fetch('https://thunder-toys-server.vercel.app/toys/Flash')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const flashData = categories?.filter((sub) => sub?.subCategory == 'Flash')
    const thorData = categories?.filter((sub) => sub?.subCategory == 'Thor')
    const supermanData = categories?.filter((sub) => sub?.subCategory == 'Superman')

    return (
        <div>
            <h2 className='text-5xl font-bold text-center my-5'>Shop By Category<span className='text-warning'>.</span></h2>
            <Tabs>
                <TabList style={{ display: "flex", justifyContent: "center" }}>
                    <Tab>Flash</Tab>
                    <Tab>Thor</Tab>
                    <Tab>Superman</Tab>
                </TabList>
                {/* Flas Tab */}
                <TabPanel>

                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        {flashData?.map((flash) => (
                            <div className="card card-compact w-80 bg-base-100 shadow-xl" key={flash._id}>
                                <figure>
                                    <img className='w-52 h-52' src={flash?.photo} alt="Toy" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{flash?.toyName}</h2>
                                    <p>price : {flash?.price}$</p>
                                    <p>rating : {flash?.rating}</p>
                                    <div className="card-actions mt-2">
                                        <Link className="btn btn-block btn-warning" to={`/toy/${flash?._id}`}><button>View Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                {/* Thor Tab */}
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                        {thorData?.map((thor) => (
                            <div className="card card-compact w-80 bg-base-100 shadow-xl" key={thor._id}>
                                <figure>
                                    <img className='w-52 h-52' src={thor?.photo} alt="Toy" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{thor?.toyName}</h2>
                                    <p>price : {thor?.price}$</p>
                                    <p>rating : {thor?.rating}</p>
                                    <div className="card-actions mt-2">
                                        <Link className="btn btn-block btn-warning" to={`/toy/${thor?._id}`}><button>View Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                {/* SuperMan Tab */}
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                        {supermanData?.map((superman) => (
                            <div className="card card-compact w-80 bg-base-100 shadow-xl" key={superman._id}>
                                <figure>
                                    <img className='w-52 h-52' src={superman?.photo} alt="Toy" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{superman?.toyName}</h2>
                                    <p>price : {superman?.price}$</p>
                                    <p>rating : {superman?.rating}</p>
                                    <div className="card-actions mt-2">
                                        <Link className="btn btn-block btn-warning" to={`/toy/${superman?._id}`}><button>View Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;