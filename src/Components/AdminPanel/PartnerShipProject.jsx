import React, { useContext, useState } from 'react'
import { IoMdClose, IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

export default function PartnerShipProject() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const profile = form.profile.value;
        const category = form.category.value;
        const status = form.status.value;
        const summary = form.summary.value;

        const ScoutInfo = { name, profile, category, status, summary}
        console.log(ScoutInfo);

    }


    return (
        <>
            <div className=' container mx-auto flex flex-col justify-center items-center'>
                <div className="bg-base-100 w-full max-w-7xl shrink-0 shadow-2xl relative">
                    <h2 className=' text-center font-bold  text-2xl mt-5'>Add Scout</h2>
                    <Link to="/" className=' absolute top-1 -right-2 w-10 h-10 rounded-full text-red-400 text-2xl'><IoMdClose /></Link>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className=' md:flex justify-between items-center gap-5 my-2'>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Full Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Profile URL</span>
                                </label>
                                <input name='profile' type="text" placeholder="Profile URL" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* 2nd value collection */}
                        <div className=' md:flex justify-between items-center gap-5 my-2'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Scout Category</span>
                                </label>
                                <input name='category' type="text" placeholder="Scout Category" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full font-semibold">
                                <label className="label">
                                    <span className="label-text font-bold">Scout Status</span>
                                </label>
                                <select className=' p-3 bg-transparent border-2 rounded-md text-semibold outline-none border-gray-700 focus:ring-2 focus:ring-gray-700' name="status" id="" required>
                                    <option className=' font-semibold' value="" disabled selected>Select Status</option>
                                    <option className=' font-semibold text-black' value="Verifed">Verifed</option>
                                    <option className=' font-semibold text-black' value="Not Verifed">Not Verifed</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <textarea
                                placeholder="Scout Summary" name='summary' required
                                className="textarea textarea-bordered textarea-lg w-full"></textarea>
                        </div>

                        <div className="form-control">
                            <button className="btn btn-primary  text-white">Add Scout</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}