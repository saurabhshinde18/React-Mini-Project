import React from 'react'
import { useNavigate } from 'react-router-dom';

const Recipiecard = ({elem}) => {
  let navigate = useNavigate();
 let id = elem.id;
  return (
    <div
  key={id}  onClick={()=>navigate(`/Recipes/${id}`)} className="w-[23vw] hover:scale-102 h-[70vh]  p-2 mt-12   border flex flex-col text-center rounded overflow-hidden bg-amber-500">
  <img
    className="h-52 w-full rounded border object-cover"
    src={elem.image}
    alt={elem.title}
  />

  <div className="flex-1 overflow-y-auto space-y-1">
    <h2 className="text-white text-2xl font-bold">
      {elem.title}
    </h2>

    <h2 className="text-black text-lg font-semibold line-clamp-2">
      {elem.description.slice(0,80)}...Load More
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
}

export default Recipiecard;