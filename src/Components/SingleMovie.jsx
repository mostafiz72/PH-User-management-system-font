import React from 'react'
import { Link } from 'react-router-dom';

export default function SingleMovie({ movies }) {
    const { _id, photo, title, genry, duration, year, ratting } = movies;

    const handleDetails = (id) => {
        console.log(id);
    }

    return (
        <>
            <div>
                <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg object-cover w-full h-[300px]" src={photo} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        </a>
                        <p className="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">Genry: {genry}</p>
                        <p className="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">Duration: {duration}</p>
                        <p className="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">Year: {year}</p>
                        <p className="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">Ratting: {ratting}</p>
                         <div className=' flex flex-col justify-end items-end'>
                        <Link to={`/details/${_id}`}  className=' btn btn-primary text-white'>See Details</Link>
                         </div>
                    </div>
                </div>

            </div>
        </>
    )
}
