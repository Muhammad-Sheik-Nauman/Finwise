import React from 'react'
import {

  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'




const Header = () => {
  return (
    <div className='fixed top- w-full bg-white/80 backdrop-blur-md z-50 border-b'>
      <nav className='container mx-auto px-4 py-1 flex items-center justify-between'>
        <Link href="/">
            {/*add logo*/}
        </Link>
      
      <div className="flex items-center ml-auto gap-4">
        <SignedOut>
          <SignInButton forceRedirectUrl='/dashboard'/>
          <SignUpButton>
            <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    
      </nav>
      </div>
  )
}

export default Header