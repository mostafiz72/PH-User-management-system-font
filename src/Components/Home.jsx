import React, { useContext } from 'react'
import Slider from './Slider/Slider'
import DynamicMovie from './DynamicMovies/DynamicMovie'
import { AuthContext } from '../AuthProviders/AuthProvider'
import DefaultsData from './DafaultData/DefaultsData';

export default function Home() {
  const { dark, setDark } = useContext(AuthContext);
  return (
    <div className={`${dark? 'bg-white': "" }`}>
    <Slider />
    <DefaultsData />
    </div>
  )
}
