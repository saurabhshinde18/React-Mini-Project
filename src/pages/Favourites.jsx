import React from 'react'
import { useContext, useEffect } from 'react';  
import { recipiesdata } from '../context/Recipiecontext'
import Card from '../components/Recipiecard';
const Favourites = () => {
  const [recipies,setrecipies] = useContext(recipiesdata);
  const favourite = JSON.parse(localStorage.getItem("fav")) || [];
  
  useEffect(()=>{
  const data = JSON.parse(localStorage.getItem("recipies")) || [];
  setrecipies(data);
  },[]);

  const newcard = favourite.map((elem) => {
    return (<Card elem={elem} key={elem.id}/>);
  })

  return (
    <>
      <h1 className="text-5xl text-center font-thin text-red-400">
        Recipes
      </h1>
      <div className="flex-wrap justify-evenly gap-18 flex">
        {favourite.length>0 ? newcard : <h1 className='text-4xl text-center mt-20 text-white'>No Favourites Added</h1>}
      </div>
    </>
  )
}

export default Favourites