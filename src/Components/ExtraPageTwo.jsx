import React from 'react'

export default function ExtraPageTwo() {
  return (
    <>
      <div
        className="hero h-[800px] object-cover rounded-md"
        style={{
          backgroundImage: "url(https://gtkit.rometheme.pro/goodmov/wp-content/uploads/sites/50/2024/05/Hero-Image.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">A captivating show that takes viewers behind the scenes of movie production.</h1>
            <p className="mb-5 text-xl font-semibold">A List of all available shotting retreats.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* 2nd section start here now */}
      <div className=' grid grid-cols-3 gap-10 container mx-auto my-20 text-black'>
        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[600px] object-cover w-full' src="https://gtkit.rometheme.pro/goodmov/wp-content/uploads/sites/50/2024/05/Project-7.jpg" alt="" />
          <h2 className=' text-2xl font-bold'>The Clown (2015)</h2>
          <h2 className=' text-xl font-semibold'>Hochzillertal, Austria</h2>
          <h2 className=' text-xl font-semibold'>2 Nights</h2>
        </div>
        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[600px] object-cover w-full' src="https://gtkit.rometheme.pro/goodmov/wp-content/uploads/sites/50/2024/05/Project-6.jpg" alt="" />
          <h2 className=' text-2xl font-bold'>Neon Horizon (2024)</h2>
          <h2 className=' text-xl font-semibold'>Verbier, Swizerland</h2>
          <h2 className=' text-xl font-semibold'>8 Nights</h2>
        </div>
        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[600px] object-cover w-full' src="https://gtkit.rometheme.pro/goodmov/wp-content/uploads/sites/50/2024/05/Project-3.jpg" alt="" />
          <h2 className=' text-2xl font-bold'>Brave Hearts (2013)</h2>
          <h2 className=' text-xl font-semibold'>Hochzillertal, Iceland</h2>
          <h2 className=' text-xl font-semibold'>`2 Nights</h2>
        </div>
      </div>
      {/* 3rd section start here now */}

      <div className=' relative'>
        <div
          className="hero h-[600px]"
          style={{
            backgroundImage: "url(https://leitmotif.qodeinteractive.com/wp-content/uploads/2019/09/faq-img-01.jpg)",
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
          </div>
        </div>
      </div>
    </>
  )
}
