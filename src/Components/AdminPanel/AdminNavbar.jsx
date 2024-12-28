import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AdminNavbar() {
    return (
        <>
            <div className=' w-11/12 mx-auto py-5 md:flex text-center justify-center items-center gap-3'>
                {/* <div>
                <NavLink to="/admin/advantage" className=" focus btn font-semibold text-md btn-warning w-full">Advantage Team</NavLink>
                </div>
                <div>
                <NavLink to="/admin/project" className=" btn font-semibold text-md btn-info mx-0 md:mx-5 w-full my-5 md:my-0">Partnership & Project</NavLink>
                </div>
                <div>
                <NavLink to="/admin/calls" className=" btn font-semibold text-md btn-success w-full">Partnership & Calls</NavLink>
                </div> */}
                <div className="md:join">
                    <NavLink to="/admin/advantage" className="btn join-item  w-full md:w-auto">Advantage Team</NavLink>
                    <NavLink to="/admin/project" className="btn join-item  w-full md:w-auto">Partnership & Project</NavLink>
                    <NavLink to="/admin/calls" className="btn join-item  w-full md:w-auto">Partnership & Calls</NavLink>
                </div>

            </div>
        </>
    )
}
