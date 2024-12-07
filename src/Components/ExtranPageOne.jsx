import React from 'react'

export default function ExtranPageOne() {
  return (
    <>
      <div
        className="hero h-[800px] object-cover rounded-md"
        style={{
          backgroundImage: "url(https://leitmotif.qodeinteractive.com/wp-content/uploads/2019/09/what-we-do-img-01.jpg)",
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
      {/* category section start here now **********************************/}
      {/* category section start here now **********************************/}

      <div className=' w-11/12 md:container mx-auto grid md:grid-cols-3 gap-10 my-20 text-black'>
        <div className=' md:col-span-3'>
          <h2 className=' text-4xl font-bold'>2024</h2>
          <p className=' text-xl font-semibold mt-3'>
            We release a new date every month.</p>
        </div>

        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[300px] object-cover w-full' src="https://leitmotif.qodeinteractive.com/wp-content/uploads/2019/08/p2-img-05.jpg" alt="" />
          <h2 className=' text-2xl font-bold'>The Shawshank Redemption (1994)</h2>
          <h2 className=' text-xl font-semibold'>Drakensberg,Kwa-zulu Natal</h2>
          <h2 className=' text-xl font-semibold'>JANUARY 2025</h2>
          <h2 className=' text-xl font-semibold'> Self-drive/ Transport available</h2>
          <h2 className=' text-xl font-semibold'>2 Nights</h2>
          <h2 className=' text-xl font-semibold'>Price from: <span className=' text-yellow-600'>R4,999 p/p/s</span></h2>
        </div>
        {/* 2 number div */}
        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[300px] object-cover w-full' src="https://leitmotif.qodeinteractive.com/wp-content/uploads/2019/08/p2-img-04.jpg" alt="" />
          <h2 className=' text-2xl font-bold'>The Godfather (1972)</h2>
          <h2 className=' text-xl font-semibold'> Parys,Free State</h2>
          <h2 className=' text-xl font-semibold'>FEBRUARY 2025</h2>
          <h2 className=' text-xl font-semibold'> Self-drive/ Transport available</h2>
          <h2 className=' text-xl font-semibold'>2 Nights</h2>
          <h2 className=' text-xl font-semibold'>Price from: <span className=' text-yellow-600'>R7,599 /couple</span></h2>
        </div>
        {/* 3 number div */}
        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[300px] object-cover w-full bg-yellow-400 rounded-md' src="https://leitmotif.qodeinteractive.com/wp-content/uploads/2019/08/p2-img-03.jpg" alt="" />
          <h2 className=' text-2xl font-bold'>The Dark Knight (2008) </h2>
          <h2 className=' text-xl font-semibold'>House on fire, Marlkens, Eswatini</h2>
          <h2 className=' text-xl font-semibold'>30 May - 1 June 2025</h2>
          <h2 className=' text-xl font-semibold'> Self-drive/ Transport available</h2>
          <h2 className=' text-xl font-semibold'> 2,3 & 4 nights</h2>
          <h2 className=' text-xl font-semibold'>Price from: <span className=' text-yellow-600'>R4,999 p/p/s</span></h2>
        </div>

        {/* 4 number div */}

        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[300px] object-cover w-full' src="http://digiflex.themezinho.net/wp-content/uploads/2020/12/movies35.jpg" alt="" />
          <h2 className=' text-2xl font-bold'>Inception (2010)</h2>
          <h2 className=' text-xl font-semibold'>TSITSIKAMMA,Eastern Cape</h2>
          <h2 className=' text-xl font-semibold'>NOVEMBER 2024 (4 days)</h2>
          <h2 className=' text-xl font-semibold'> Self-drive/ Transport available</h2>
          <h2 className=' text-xl font-semibold'> 4 days</h2>
          <h2 className=' text-xl font-semibold'>Price from: <span className=' text-yellow-600'>R7,999 p/p/s</span></h2>
        </div>
        {/* 5 number div */}
        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[300px] object-cover w-full' src="http://digiflex.themezinho.net/wp-content/uploads/2020/12/movies34.jpg" alt="" />
          <h2 className=' text-2xl font-bold'>Forrest Gump (1994)</h2>
          <h2 className=' text-xl font-semibold'>Drakensberg,Kwa-zulu Natal</h2>
          <h2 className=' text-xl font-semibold'> Badplaas,Forever Resort, Mpumalanga</h2>
          <h2 className=' text-xl font-semibold'> Self-drive/ Transport available</h2>
          <h2 className=' text-xl font-semibold'> 13-16 DECEMBER 2024 (4 days)</h2>
          <h2 className=' text-xl font-semibold'>Price from: <span className=' text-yellow-600'> R6,099 p/p/s</span></h2>
        </div>
        {/* 6 number div */}
        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[300px] object-cover w-full' src="http://digiflex.themezinho.net/wp-content/uploads/2020/12/movies24.jpg" alt="" />
          <h2 className=' text-2xl font-bold'>Parasite (2019) </h2>
          <h2 className=' text-xl font-semibold'>Drakensberg,Kwa-zulu Natal</h2>
          <h2 className=' text-xl font-semibold'>23-27 DECEMBER 2024 (5 days)</h2>
          <h2 className=' text-xl font-semibold'> Self-drive/ Transport available</h2>
          <h2 className=' text-xl font-semibold'> 5 days</h2>
          <h2 className=' text-xl font-semibold'>Price from: <span className=' text-yellow-600'>R4,999 p/p/s</span></h2>
        </div>

      </div>

      {/* three section start here now */}

      <div className=' container mx-auto'>
        <h2 className=' text-5xl font-bold'>our crew. </h2>
        <div className=' grid md:grid-cols-2 lg:grid-cols-4 my-20'>
          <div className=' bg-slate-100'>
            <img className=' h-[700px] object-cover w-full' src="https://leitmotif.qodeinteractive.com/wp-content/uploads/2019/09/our-crew-img-01.jpg" alt="" />
            <div className=' flex flex-col justify-center items-center bg-gray-800 py-3'>
              <h2 className=' text-2xl font-semibold'> oedipa mass.</h2>
              <h2 className=' text-sm font-semibold'> Executive producer</h2>
            </div>
          </div>
          <div className=' bg-slate-100'>
            <img className=' h-[700px] object-cover w-full' src="https://leitmotif.qodeinteractive.com/wp-content/uploads/2019/09/our-crew-img-03.jpg" alt="" />
            <div className=' flex flex-col justify-center items-center bg-gray-800 py-3'>
              <h2 className=' text-2xl font-semibold'> oedipa mass.</h2>
              <h2 className=' text-sm font-semibold'> Executive producer</h2>
            </div>
          </div>
          <div className=' bg-slate-100'>
            <img className=' h-[700px] object-cover w-full' src="https://leitmotif.qodeinteractive.com/wp-content/uploads/2019/09/our-crew-img-04.jpg" alt="" />
            <div className=' flex flex-col justify-center items-center bg-gray-800 py-3'>
              <h2 className=' text-2xl font-semibold'> oedipa mass.</h2>
              <h2 className=' text-sm font-semibold'> Executive producer</h2>
            </div>
          </div>
          <div className=' bg-slate-100'>
            <img className=' h-[700px] object-cover w-full' src="https://leitmotif.qodeinteractive.com/wp-content/uploads/2019/09/our-crew-img-7.jpg" alt="" />
            <div className=' flex flex-col justify-center items-center bg-gray-800 py-3'>
              <h2 className=' text-2xl font-semibold'> oedipa mass.</h2>
              <h2 className=' text-sm font-semibold'> Executive producer</h2>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
