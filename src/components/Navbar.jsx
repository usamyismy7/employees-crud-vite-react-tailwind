import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div className="px-28 py-8 shadow-md bg-teal-200 text-gray-700">
            <Link to='/'>
                <h1 className='font-bold text-2xl'>Employees Record</h1>
            </Link> 
        </div>
    </header>
  )
}

export default Navbar
