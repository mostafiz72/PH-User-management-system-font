import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function MoviesDetails() {
    
    const singleMovieData = useLoaderData();
    const { _id, photo, title, genry, duration, year, ratting } = singleMovieData;

  return (
    <>
    
    </>
  )
}
