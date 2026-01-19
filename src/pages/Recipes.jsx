import React, { useContext } from 'react'
import { recipiesdata } from '../context/Recipiecontext'
import Card from '../components/Recipiecard'

const Recipes = () => {
  const [recipies] = useContext(recipiesdata)
  console.log(recipies)

  const newcard = recipies.map((elem) => {
    return (<Card elem={elem} key={elem.id}/>);
  })

  return (
    <>
      <h1 className="text-5xl text-center font-thin text-white">
        Recipes
      </h1>
      <div className="flex-wrap justify-evenly gap-18 flex">
        {newcard}
      </div>
    </>
  )
}

export default Recipes
