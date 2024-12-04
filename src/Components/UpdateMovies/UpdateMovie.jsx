import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function UpdateMovie() {

     const Navigate = useNavigate();

    const updateMovies = useLoaderData();
    const { _id, photo, title, genry, duration, year, ratting } = updateMovies;

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const genry = form.genry.value;
        const duration = form.duration.value;
        const year = form.year.value;
        const ratting = form.ratting.value;
        const movieUpdated = { photo, title, genry, duration, year, ratting }

        // Update the movie data in the database
        fetch(`http://localhost:3000/updatemovie/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(movieUpdated)
        })
           .then(res => res.json())
           .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: "center center",
                    icon: "success",
                    title: "Updated successfully",
                    showConfirmButton: false,
                    timer: 2500
                  });
            }
            setTimeout(()=>{
                Navigate("/allmovives")
            }, 2000);

            })
    }

    return (
        <>
            <div className=' container mx-auto flex flex-col justify-center items-center'>
                <div className="bg-base-100 w-full max-w-7xl shrink-0 shadow-2xl relative">
                    <h2 className=' text-center font-bold  text-2xl mt-5'>Update Movie</h2>
                    <Link to="/" className=' absolute top-1 -right-2 w-10 h-10 rounded-full text-red-400 text-2xl'><IoMdClose /></Link>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className=' flex justify-between items-center gap-5 my-2'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Movie URL</span>
                                </label>
                                <input name='photo' type="text" defaultValue={photo} placeholder="Movie URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Movie Title</span>
                                </label>
                                <input name='title' type="text" defaultValue={title} placeholder="Movie title" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* 2nd value collection */}
                        <div className=' flex justify-between items-center gap-5 my-2'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Movie Genre</span>
                                </label>
                                <select className=' p-3 bg-transparent border-2 rounded-md text-semibold outline-none border-gray-700 focus:ring-2 focus:ring-gray-700' name="genry" defaultValue={genry} id="">
                                    <option value="Select">Select Ganry</option>
                                    <option value="comedy">Comedy</option>
                                    <option value="drama">Drama</option>
                                    <option value="horror">Horror</option>
                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Movie Duration</span>
                                </label>
                                <input name='duration' type="number" defaultValue={duration} placeholder="Movie duration" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* 3rd value collection */}
                        <div className=' flex justify-between items-center gap-5 my-2'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Movie Release Year</span>
                                </label>
                                <select className=' p-3 bg-transparent border-2 rounded-md text-semibold outline-none border-gray-700 focus:ring-2 focus:ring-gray-700' name="year" defaultValue={year} id="">
                                    <option value="Select">Select Release Year</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Movie Ratting</span>
                                </label>
                                <input name='ratting' type="number" defaultValue={ratting} placeholder="Movie Ratting" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary  text-white">Update Movie</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
