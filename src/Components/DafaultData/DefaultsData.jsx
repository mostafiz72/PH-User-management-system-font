import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function DefaultsData() {

    const [defaultData, setDefaultData] = useState([]);

    useEffect(() => {
        fetch('https://movie-portal-back.vercel.app/six')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setDefaultData(data);
            })
    }, [])
    return (
        <>
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto md:mt-20'>
                {defaultData.map(data => <div key={data._id}>
                        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg object-cover w-full h-[300px]" src={data.photo} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                                </a>
                                <p className="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">Genry: {data.genry}</p>
                                <p className="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">Duration: {data.duration}</p>
                                <p className="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">Year: {data.year}</p>
                                <p className="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">Ratting: <span className=' bg-gray-700 p-2 rounded-full text-yellow-300'>{data.ratting}</span></p>
                                <div className=' flex flex-col justify-end items-end'>
                                    <Link to={`/details/${data._id}`} className=' btn btn-primary text-white'>See Details</Link>
                                </div>
                            </div>
                        </div>
                </div>)}
            </div>
            <div className=' flex justify-center items-center w-full mt-20'><Link to="/allmovives" className=' btn btn-accent'>See More Movie</Link></div>
        </>
    )
}
