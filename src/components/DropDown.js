import React from 'react'
import './DropDown.css'
const DropDown = () => {
  return (
    <div className=" md:hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <a href="/create" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
            Create New User
        </a>

        <a href="/attendance" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            ClockIn / ClockOut
        </a>
      </div>
    </div>
  )
}

export default DropDown
