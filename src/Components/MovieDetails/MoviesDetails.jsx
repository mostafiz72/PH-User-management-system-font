import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

export default function MoviesDetails() {

    const singleMovieData = useLoaderData();
    const { _id, photo, title, genry, duration, year, ratting } = singleMovieData;
     const Navigate = useNavigate();
    const allMovie = ()=>{
       Navigate('/allmovives');
    }

    return (
        <>
                <div className=" container mx-auto grid grid-cols-5 gap-10 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className=' col-span-3'>
                    <img className="object-cover w-full rounded-t-lg md:rounded-none md:rounded-s-lg" src={photo} alt="" />
                    </div>
                    <div className="flex flex-col justify-center p-4 w-full">
                        <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <p className="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">Genry: {genry}</p>
                        <p className="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">Duration: {duration}</p>
                        <p className="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">Year: {year}</p>
                        <p className="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">Ratting: {ratting}</p>
                         <button onClick={allMovie} className=' btn btn-accent font-semibold text-white'>See All Movies</button>
                    </div>
                </div>
        </>
    )
}
