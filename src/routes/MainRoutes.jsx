import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import Create from '../pages/Create';
import About from '../pages/About';

const MainRoutes = () => {
  return (
 <>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Recipes' element={<Recipes/>}/>
    <Route path='/Create' element={<Create/>}/>
    <Route path='/About' element={<About/>}/>
 </Routes>
 
 </>
  )
}

export default MainRoutes