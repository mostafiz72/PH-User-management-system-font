import React, { useContext } from 'react'
import { FaGoogle } from 'react-icons/fa6';
import { IoMdClose, IoMdEyeOff } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../AuthProviders/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {

  const { signUpWithGoogle, setUser, setUserEmail } = useContext(AuthContext)

   const handleSubmit = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const userPhoto = form.photo.value;
    const password = form.password.value;
    
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
  }
  if (!/[A-Z]/.test(password)) {
    toast.error("Password must contain at least one uppercase letter.");
    return;
}
  if (!/[a-z]/.test(password)) {
    toast.error("Password must contain at least one lowercase letter.");
    return;
}
    const userInfo = { name, email, userPhoto,};
    console.log(userInfo);
    fetch('http://localhost:3000/movie', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
      toast.success("Register successfully")
      setUserEmail(email)
    })
    
  }

  // singUp with google functionality starting --------------

  const loginWithGoogle = ()=> {
    signUpWithGoogle()
    .then(data => {
      setUser(data.user)
    })
    .catch(err => {
      console.log(err);
      
    })
  }


  return (
    <>
    <ToastContainer position='top-center' />
      <div className=' flex justify-center items-center h-screen'>
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl relative">
          <h2 className=' text-center font-bold  text-2xl mt-5'>Login From</h2>
          <Link to="/" className=' absolute top-1 -right-2 w-10 h-10 rounded-full text-red-600 text-2xl'><IoMdClose /></Link>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input name='name' type="name" placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name='email' type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input name='photo' type="text" placeholder="photo URL" className="input input-bordered" required />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" name='password' placeholder="password" className="input input-bordered" required />
              <button className=' text-xl absolute top-[52px] right-5'><IoMdEyeOff /></button>
            </div>
            <div className="form-control flex flex-col justify-center w-full">
              <p className=' text-right mb-5 font-semibold'>Allready Have An Account ? <Link to="/login" className="text-red-500 hover:underline">Login</Link></p>
              <button className="btn btn-primary">Register</button>
              <span className=' text-xl my-3 text-center'>or</span>
              <button onClick={loginWithGoogle} className=' btn btn-info'> <span className=' text-yellow-400 text-lg'><FaGoogle /></span> SignUp Wtih Google</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
