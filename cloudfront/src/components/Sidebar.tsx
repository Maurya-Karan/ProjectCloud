import React from 'react'

function Sidebar() {
  return (
    <div className='w-64 h-screen bg-sidebar rounded-xl '>
        <div className='p-4'>Sync</div>
        <div className='px-4 py-2'>Dashboard</div>
        <div className='px-4 py-2'>Trending</div>
    </div>
  )
}

export default Sidebar