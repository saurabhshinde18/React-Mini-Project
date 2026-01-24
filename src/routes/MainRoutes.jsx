import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import Create from '../pages/Create';
import About from '../pages/About';
import SingleRecipie from '../pages/SingleRecipie';
import Pagenotfound from '../pages/Pagenotfound';
import Favourites from '../pages/Favourites';

const MainRoutes = () => {
  return (
 <>
 <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/Recipes' element={<Recipes/>}/>
     <Route path='/Recipes/:id' element={<SingleRecipie/>}/>
    <Route path='/Create' element={<Create/>}/>
    <Route path='/About' element={<About/>}/>
     <Route path='/favourite' element={<Favourites/>}/>
    <Route path='*' element={<Pagenotfound/>}/>
 </Routes>
 
 </>
  )
}

export default MainRoutes