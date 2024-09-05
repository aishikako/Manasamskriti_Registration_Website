import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
    const {user, googleSignIn, logOut} = UserAuth()
    const [loading, setLoading] = useState(true);

    const handleSignIn = async () => {
        try {
            await googleSignIn()
        } catch(error) {
            console.log(error);
        }
    };

    const handleSignOut = async () => {
        try {
            await logOut()
            window.location.href = "/";

        } catch(error) {
            console.log(error);
        }
    };
    useEffect( ()=> {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50))
            setLoading(false);
        }
        checkAuthentication()
    }, [user])

  return (
    <div className='h-20 w-full border-b-2 flex items-center justify-between p-5 bg-gradient-to-tr from-red-200 to bg-red-100'>
        <div>
            <h1 className='px-3 text-red-900 text-2xl font-bold font-serif self-center'>Mana Samskriti</h1>
        </div>

    
        
        <div>
            <ul className='flex items-center'>
                <li className='p-4 cursor pointer hover:text-red-900 group relative'>
                    <Link href="/">Home</Link>
                    <span className="absolute -bottom-px left-1/2 w-0 transition-all h-1 bg-red-400 group-hover:w-3/6"></span>
                    <span className="absolute -bottom-px right-1/2 w-0 transition-all h-1 bg-red-400 group-hover:w-3/6"></span>
                </li>
                <li className='p-4 cursor pointer hover:text-red-900 group relative'>
                    <Link href="/about">Tests</Link>
                    <span className="absolute -bottom-px left-1/2 w-0 transition-all h-1 bg-red-400 group-hover:w-3/6"></span>
                    <span className="absolute -bottom-px right-1/2 w-0 transition-all h-1 bg-red-400 group-hover:w-3/6"></span>
                </li>
                {!user ? null : (
                    <li className='p-4 cursor pointer hover:text-red-900 group relative'>
                        <Link href="/profile">Profile</Link>
                        <span className="absolute -bottom-px left-1/2 w-0 transition-all h-1 bg-red-400 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-px right-1/2 w-0 transition-all h-1 bg-red-400 group-hover:w-3/6"></span>
                    </li>
                )}
                <div>
                    {loading? null : !user ? (
                        <ul className='flex'>
                            <li onClick={handleSignIn} className='px-6  p-2 cursor-pointer bg-red-300 rounded-md shadow-md hover:shadow-none hover:bg-red-400 hover:bg-opacity-70'>Sign In</li>
                            {/* <li onClick={handleSignIn} className='px-6 hover:text-red-900 p-2 cursor-pointer'>Sign up</li> */}
                        </ul>
                    ) : (
                    <div className='px-6'>
                        <p>Welcome,  {user.displayName}</p>
                        <p className=' cursor-pointer bg-red-300 shadow-md hover:shadow-none hover:bg-red-400 hover:bg-opacity-70 rounded-md  flex justify-center 'onClick={handleSignOut}>Sign Out </p>
                    </div>
                    )}

                </div>
               
                
            </ul>
            
            
        </div>
        
    </div>
  )
}

export default Navbar
