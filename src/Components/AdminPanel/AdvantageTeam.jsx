import React from 'react'

export default function AdvantageTeam() {
  return (
    <>
      <div className="overflow-x-auto  backdrop-blur-md bg-white/50 container mx-auto rounded-md">
          <h2 className=' text-3xl font-bold text-center text-blue-500 my-8'>All team member list</h2>
        <table className="table font-semibold text-lg">
          {/* head */}
          <thead>
            <tr>
              <th className=' font-semibold text-xl text-black'> Number</th>
              <th className=' font-semibold text-xl text-black'>Name</th>
              <th className=' font-semibold text-xl text-black'>Social Link</th>
              <th className=' font-semibold text-xl text-black'>Status</th>
              <th className=' font-semibold text-xl text-black'>Customs</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                1
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Example@telegram link
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <td className=' font-bold text-green-800'>Verifed</td>
              <th>
                 <div>
              <button className="btn btn-primary text-white mr-5">Update Scout</button>
              <button className="btn btn-error text-white">Delete Scout </button>
                 </div>
              </th>
            </tr>
            {/* row 1 */}
            <tr>
              <th>
                2
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Example@telegram link
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <td className=' font-bold text-red-500'>Not Verifed</td>
              <th>
                 <div>
              <button className="btn btn-primary text-white mr-5">Update Scout</button>
              <button className="btn btn-error text-white">Delete Scout </button>
                 </div>
              </th>
            </tr>
          </tbody>
        </table>
          <div className=' flex justify-center items-center my-10'>
        <button className=' btn btn-primary'>Add Team member</button>
          </div>
      </div>
    </>
  )
}
