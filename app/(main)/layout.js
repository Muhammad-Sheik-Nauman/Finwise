import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='container mx-auto  pt-20'>
      {children}
    </div>
  )
}

export default MainLayout