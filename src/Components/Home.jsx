import React, { useContext } from 'react'
import Slider from './Slider/Slider'
import DynamicMovie from './DynamicMovies/DynamicMovie'
import { AuthContext } from '../AuthProviders/AuthProvider'

export default function Home() {
  const { dark, setDark } = useContext(AuthContext);
  return (
    <div className={`${dark? 'bg-white': "" }`}>
    <Slider />
    <DynamicMovie />
    <DynamicMovie />
    </div>
  )
}
