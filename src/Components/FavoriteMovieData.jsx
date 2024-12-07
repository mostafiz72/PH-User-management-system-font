import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function FavoriteMovieData( { favorite, favoriteUpdted, setfavoriteUpdated } ) {

     const { photo, title, genry, duration, year, ratting, _id } = favorite;
     console.log(favoriteUpdted);
     

     const favoriteDelete = (id)=>{
        console.log("favoriteDelete is clicked", id);
        fetch(`http://localhost:3000/favorite/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            Swal.fire({
                position: "center center",
                icon: "success",
                title: "Deleted successfully",
                showConfirmButton: false,
                timer: 2500
              });
            setfavoriteUpdated(favoriteUpdted.filter(f => f._id !== id))
          }
        })
     }

    return (
        <>
            <div>
                <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg object-cover w-full h-[300px]" src={photo} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        </a>
                        <p className="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">Genry: {genry}</p>
                        <p className="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">Duration: {duration}</p>
                        <p className="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">Year: {year}</p>
                        <p className="mb-3 font-semibold text-lg text-gray-700 dark:text-gray-400">Ratting: {ratting}</p>
                        <div className=' flex flex-col justify-end items-end'>
                            <button onClick={()=> favoriteDelete(_id)} className=' btn btn-error text-white'>Delete favorite</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
