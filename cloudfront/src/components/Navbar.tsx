import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-row justify-between w-screen px-2 top-0'>
      <div className='flex flex-row'>
          Sync
      </div>
      <div className='flex flex-row justify-around gap-4 '>
        <p>Search</p>
        <p>Groups</p>
        <p>Contacts</p>
      </div>
    </div>
  )
}

export default Navbar