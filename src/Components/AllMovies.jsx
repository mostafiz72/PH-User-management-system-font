import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleMovie from './SingleMovie';
import Swal from 'sweetalert2';
import { IoSearchSharp } from 'react-icons/io5';

export default function AllMovies() {
  const allMovie = useLoaderData();
  

  const [allMovieData, setAllMovieData] = useState(allMovie);
  const [search, setSearch] = useState("");
  

/// sorting functationality starts here now....

  const handleSort = ()=>{
    const sortedMovies = [...allMovieData].sort((a, b) => b.ratting - a.ratting);
    setAllMovieData(sortedMovies);
    Swal.fire({
      position: "center center",
      icon: "success",
      title: "Movie Sorted",
      showConfirmButton: false,
      timer: 2500
    });
   }

   //// Search the under all movies and show to search releted data

   useEffect(()=>{
      fetch(`http://localhost:3000/movie?searchParams=${search}`)
       .then(res => res.json())
       .then(data => {
         setAllMovieData(data);
       })
   }, [search])

  
  return (
    <>
      <div className=' container mx-auto min-h-screen'>
        <div className=' flex justify-between items-center my-10'>
          <div>
            <h2 className=' text-xl font-bold'>All Movie Data ({allMovieData.length}) </h2>
          </div>
          <div className=' w-96'>
          <input type="text" onChange={e=> setSearch(e.target.value)} placeholder="Search Movie" className="input input-bordered w-full" />
          </div>
          <div><button onClick={()=>handleSort()} className=' btn btn-accent text-white'>Sort by Ratting</button></div>
        </div>
         
         {/* Showing the movie data  */}
         {
          allMovieData.length?
          <div className=' grid grid-cols-3 gap-10'>
          { allMovieData.map(movies => <SingleMovie key={movies._id} movies={movies}></SingleMovie>)}
        </div> : <div className=' text-3xl font-semibold flex justify-center gap-3 items-center min-h-screen'> <IoSearchSharp /> Not found Movie</div>
        }
      </div>
    </>
  )
}
