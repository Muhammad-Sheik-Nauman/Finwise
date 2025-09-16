import React from 'react'
import CreateAccountDrawer from '@/components/create-account-drawer';

 function DashboardPage(){
  return (
    <div className='px-5'>
        {/* budget progress */}
        {/* Dashboard Overview */}
        {/* accounts grid */} 
          <div>
            <CreateAccountDrawer>
                open
            </CreateAccountDrawer>
          </div>
    </div>
  )
};

export default DashboardPage;