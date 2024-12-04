import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleMovie from './SingleMovie';

export default function AllMovies() {
  const allMovie = useLoaderData();

  const [allMovieData, setAllMovieData] = useState(allMovie);
  const [search, setSearch] = useState("");
  console.log(search);
  

/// sorting functationality starts here now....

  const handleSort = ()=>{
    const sortedMovies = [...allMovieData].sort((a, b) => b.ratting - a.ratting);
    setAllMovieData(sortedMovies);    
   }

  
  return (
    <>
      <div className=' container mx-auto'>
        <div className=' flex justify-between items-center my-10'>
          <div>
            <h2 className=' text-xl font-bold'>All Movie Data ({allMovieData.length}) </h2>
          </div>
          <div className=' w-96'>
          <input type="text" onChange={e=> setSearch(e.target.value)}  placeholder="Search Movie" className="input input-bordered w-full" />
          </div>
          <div><button onClick={()=>handleSort()} className=' btn btn-accent text-white'>Sort by Ratting</button></div>
        </div>

        <div className=' grid grid-cols-3 gap-10'>
          {allMovieData.map(movies => <SingleMovie key={movies._id} movies={movies}></SingleMovie>)}
        </div>
      </div>
    </>
  )
}
