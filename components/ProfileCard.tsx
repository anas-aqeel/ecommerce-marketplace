import { UserinfoEndpointHandler } from 'next-auth/providers'
import { type } from 'os'
import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'


const ProfileCard = ({user}:any) => {
  return (
    <div className="flex items-center h-screen w-full justify-center">
      <div className="max-w-xs">
        <div className="bg-white shadow-xl rounded-lg py-3">
          <div className="photo-wrapper p-2">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src={user.image}
              alt="John Doe"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              {user.name}
            </h3>
            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Email
                  </td>
                  <td className="px-2 py-2">{user.email}</td>
                </tr>
                
              </tbody>
            </table>

            <div className="text-center my-3">
              <Button
                className="text-xs w-full text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                onClick={()=>{
                    signOut()
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
