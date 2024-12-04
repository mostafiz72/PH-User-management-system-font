import React from 'react'
import { IoMdClose, IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function AddMovies() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const genry = form.genry.value;
        const duration = form.duration.value;
        const year = form.year.value;
        const ratting = form.ratting.value;
        const MovieInfo = { photo, title, genry, duration, year, ratting }
        console.log(MovieInfo);
        // form.reset();

        fetch('http://localhost:3000/movie', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(MovieInfo)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })


    }


    return (
        <>
            <div className=' container mx-auto flex flex-col justify-center items-center'>
                <div className="bg-base-100 w-full max-w-7xl shrink-0 shadow-2xl relative">
                    <h2 className=' text-center font-bold  text-2xl mt-5'>Add Movie</h2>
                    <Link to="/" className=' absolute top-1 -right-2 w-10 h-10 rounded-full text-red-400 text-2xl'><IoMdClose /></Link>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className=' flex justify-between items-center gap-5 my-2'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Movie URL</span>
                                </label>
                                <input name='photo' type="text" placeholder="Movie URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Movie Title</span>
                                </label>
                                <input name='title' type="text" placeholder="Movie title" className="input input-bordered" required />
                                </div>
                        </div>
                        {/* 2nd value collection */}
                        <div className=' flex justify-between items-center gap-5 my-2'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Movie Genre</span>
                                </label>
                                <select className=' p-3 bg-transparent border-2 rounded-md text-semibold outline-none border-gray-700 focus:ring-2 focus:ring-gray-700' name="genry" id="">
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
                                <input name='duration' type="number" placeholder="Movie duration" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* 3rd value collection */}
                        <div className=' flex justify-between items-center gap-5 my-2'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Movie Release Year</span>
                                </label>
                                <select className=' p-3 bg-transparent border-2 rounded-md text-semibold outline-none border-gray-700 focus:ring-2 focus:ring-gray-700' name="year" id="">
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
                                <input name='ratting' type="number" placeholder="Movie Ratting" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control">
                            <button className="btn btn-primary  text-white">Add Movie</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}