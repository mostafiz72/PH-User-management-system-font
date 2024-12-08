import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import FavoriteMovieData from './FavoriteMovieData';
import { IoSearchSharp } from 'react-icons/io5';

export default function FavoritesMovies() {
  const favorites = useLoaderData();
  const [ favoriteUpdted, setfavoriteUpdated ] = useState(favorites);

  
  return (
    <>
    {
      favoriteUpdted.length ? 
      <div className=' min-h-screen container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {
        favoriteUpdted.map(favorite => <FavoriteMovieData key={favorite._id} favorite={favorite} setfavoriteUpdated={setfavoriteUpdated} favoriteUpdted={favoriteUpdted}></FavoriteMovieData>)
      }
    </div>: <div className=' text-3xl font-semibold flex justify-center gap-3 items-center min-h-screen'> <IoSearchSharp /> Not found Favorite</div>
    }
    </>
  )
}
