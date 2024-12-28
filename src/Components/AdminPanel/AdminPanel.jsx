import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import AdminNavbar from './adminNavbar'

export default function AdminPanel() {
    return (
        <>
            <div className=' md:relative'>
                <video autoPlay
                    loop
                    speed={0.5}
                    muted className=' w-full h-full hidden md:block ' src='https://cdn.pixabay.com/video/2022/08/01/126352-735976759_tiny.mp4'></video>
                <div className=' md:absolute top-0 w-full h-full  backdrop-blur-md bg-white/5'>
                    <div>
                        <div>
                            <h2 className=' text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-pink-600 my-5'>Admin Panel</h2>
                            <div className=' container mx-auto'><AdminNavbar /></div>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
