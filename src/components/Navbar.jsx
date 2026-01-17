import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-amber-50 text-xl flex justify-center items-center gap-[10%] p-10' >
  <NavLink to='/' className={(e)=> e.isActive ? "text-pink-400":""}>Home</NavLink>
  <NavLink to='/Recipes' className={(e)=> e.isActive ? "text-pink-400":""} >Recipes</NavLink>
  <NavLink to='/About' className={(e)=> e.isActive ? "text-pink-400":""}>About</NavLink>
  <NavLink to='/Create'   className={ (e)=> e.isActive ? "text-pink-400 rounded bg-red-900 p-3 border":"text-amber-50 rounded bg-red-900 p-3 border"}>Create Recipe</NavLink>
    </div>

  )
}

export default Navbar