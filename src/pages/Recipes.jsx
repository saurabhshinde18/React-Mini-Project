import React, { useContext } from 'react'
import { recipiesdata } from '../context/Recipiecontext'

const Recipes = () => {
  const [recipies] = useContext(recipiesdata)
  console.log(recipies)

  const Card = recipies.map((elem, index) => {
    return (
      <div
  key={index}
  className="w-[328px] h-[480px] ml-40 p-2 mt-20 border flex flex-col text-center rounded overflow-hidden bg-amber-500"
>
  <img
    className="h-48 w-full rounded border object-cover"
    src={elem.image}
    alt={elem.title}
  />

  <div className="flex-1 overflow-y-auto space-y-1">
    <h2 className="text-white text-2xl font-bold">
      {elem.title}
    </h2>

    <h2 className="text-black text-lg font-semibold line-clamp-2">
      {elem.description}
    </h2>

    <h2 className="text-red-900 text-lg font-thin line-clamp-2">
      {elem.ingridiants}
    </h2>

    <h2 className="text-black text-base font-thin line-clamp-3">
      {elem.instructions}
    </h2>

    <h2 className="text-red-900 text-sm font-thin">
      {elem.category}
    </h2>
  </div>
</div>
    )
  })

  return (
    <>
      <h1 className="text-5xl text-center font-thin text-white">
        Recipes
      </h1>
      <div className="flex-wrap flex">
        {Card}
      </div>

      
    </>
  )
}

export default Recipes
