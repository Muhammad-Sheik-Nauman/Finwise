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
import { Button } from './ui/button'
import { LayoutDashboard, PenBox } from 'lucide-react'
import { checkUser } from '@/lib/checkUser'





const Header = async () => {
  const user = await checkUser();
  return (
    <div className='fixed top- w-full bg-white/80 backdrop-blur-md z-50 border-b'>
      <nav className='container mx-auto px-4 py-1 flex items-center justify-between'>
        <Link className='h-12 w-16 flex items-center' href="/">
          <Image src="/logo.jpeg" alt="Logo" width={100} height={48} className="object-contain h-12 w-16" />
        </Link>

        <div className="flex items-center ml-auto gap-4">

          <div className='flex items-center space-x-4'>
            <SignedIn>
              <Link href={"/dashboard"} className='text-gray-600 hover:text-blue-600 flex  items-baseline gap-2'>
                <Button variant="outline">
                  <LayoutDashboard size={18} />
                  <span className='hidden md:inline'>Dashboard</span>

                </Button>
              </Link>
              <Link href={"/transaction/create"}>
                <Button  className="flex items-center gap-2">
                  <PenBox size={18} />
                  <span className='hidden md:inline'>Add Transaction</span>

                </Button>
              </Link>
            </SignedIn>



            <SignedOut>
              <SignInButton forceRedirectUrl='/dashboard'>
                <button className="bg-[#d0cbe2] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton>
                <button className="bg-[#e3e1eb] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            
            <SignedIn>
              
              
              <UserButton  appearance={{
                elements: {
                  avatarBox: 'w-10 h-10',
                }
              }}/>
            </SignedIn>
          </div>
        </div>



      </nav>
    </div>
  )
}

export default Header