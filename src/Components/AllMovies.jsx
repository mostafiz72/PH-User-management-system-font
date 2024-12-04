import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleMovie from './SingleMovie';

export default function AllMovies() {
  const allMovie = useLoaderData();
  
  return (
    <>
      <div className=' container mx-auto'>
        <div className=' flex justify-between items-center my-5'>
          <div>
            <h2 className=' text-xl font-bold'>All Category Data </h2>
          </div>
          <div><button className=' btn btn-accent text-white'>Sort by Ratting</button></div>
        </div>

        <div className=' grid grid-cols-3 gap-10'>
          {allMovie.map(movies => <SingleMovie key={movies._id} movies={movies}></SingleMovie>)}
        </div>
      </div>
    </>
  )
}
