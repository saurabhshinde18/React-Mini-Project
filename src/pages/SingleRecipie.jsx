import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { set, useForm } from 'react-hook-form';
import { recipiesdata } from '../context/Recipiecontext';
import Recipes from './Recipes';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
const SingleRecipie = () => {
  const { id } = useParams();
  const [recipies, setrecipies] = useContext(recipiesdata);
  const navigate = useNavigate();
 const [favourite, setFavourite] = useState(
  JSON.parse(localStorage.getItem("fav")) || []
);
  const recipe = recipies.find((r) => r.id == id);

  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: recipe?.title,
      description: recipe?.description,
      image: recipe?.image,
      ingridiants: recipe?.ingridiants,
      instructions: recipe?.instructions,
      category: recipe?.category,
    },
  });

  function handleForm(data) {
    const index = recipies.findIndex((recipe) => id == recipe.id);
    const copydata = [...recipies];
    copydata[index] = { ...copydata[index], ...data };
    setrecipies(copydata);
    localStorage.setItem("recipies", JSON.stringify(copydata));
    toast.success("Recipie Updated Successfully");
    navigate("/recipes");
    reset();
  }

  function handleDelete(id) {
    const newRecipes = recipies.filter((recipe) => recipe.id != id);
    setrecipies(newRecipes);
    localStorage.setItem("recipies", JSON.stringify(newRecipes));
    toast.warn("Deleted successfully");
    navigate("/recipes");
  }

  if (!recipe) {
    return <h1 className="text-center mt-20 text-2xl">Recipe not found</h1>;
  }
 

   function favhandler(){
     let copy = [...favourite];
    copy.push(recipe);
    setFavourite(copy);
     localStorage.setItem("fav", JSON.stringify(copy));
   }

   function unfavhandler(){
   const filterfav = favourite.filter((f) => f.id != recipe?.id);
   setFavourite( filterfav);
  localStorage.setItem("fav", JSON.stringify(filterfav));
   }

   useEffect(() => {
    console.log("single recipie mounted");
    return () => {
      console.log("single recipie unmounted");
    };
  }, []);
  return (
    <div className="ml-10 flex gap-20">
      <div className="w-1/2r relative bg-gray-800 h-screen p-6">
   {favourite.find((f) => f.id === recipe?.id) ? (
  <i
    onClick={unfavhandler}
    className="fa-solid fa-heart text-3xl text-red-400 absolute z-50 right-[10%]"
  ></i>
) : (
  <i
    onClick={favhandler}
    className="fa-regular fa-heart text-3xl text-red-400 absolute z-50 right-[10%]"
  ></i>
)}
 
      

        <h1 className="text-3xl relative text-white font-bold">
          {recipe.title}
        </h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="mt-6 w-[40vw] h-[20vw] object-cover border-amber-500 rounded-2xl  h-[80vh] "
        />
      </div>

      <div className="w-1/2 bg-black h-screen p-8">
        <div className="w-[100%]">
          <form
            onSubmit={handleSubmit(handleForm)}
            className="flex flex-col gap-3"
          >
            <input
              className="text-amber-400 text-xl border-b outline-0 p-2 "
              {...register("title", { required: "the title cant be empty" })}
              placeholder="enter recipie name"
              type="text"
            ></input>
            <small className="text-sm text-red-300  ">
              {errors?.title?.message}
            </small>
            <input
              className="text-amber-400 text-xl border-b outline-0 p-2 "
              {...register("image", { required: "the url cant be empty" })}
              placeholder="enter image url "
              type="text"
            ></input>
            <small className="text-sm text-red-300  ">
              {errors?.title?.message}
            </small>

            <input
              className="text-amber-400 text-xl border-b outline-0 p-2 "
              {...register("description", {
                required: "the description cant be empty",
              })}
              placeholder="enter description here"
            ></input>
            <small className="text-sm text-red-300  ">
              {errors?.title?.message}
            </small>

            <textarea
              className="text-amber-400 text-xl border-b outline-0 p-2 "
              {...register("ingridiants", {
                required: "the ingridiants cant be empty",
              })}
              placeholder="enter recipie ingridiants"
            />
            <small className="text-sm text-red-300  ">
              {errors?.title?.message}
            </small>

            <textarea
              className="text-amber-400 text-xl border-b outline-0 p-2 "
              {...register("instructions", {
                required: "the instructions cant be empty",
              })}
              placeholder="enter instructions"
            />
            <small className="text-sm text-red-300  ">
              {errors?.title?.message}
            </small>

            <select
              className="text-amber-400 text-xl border-b outline-0 p-2 "
              {...register("category", { required: "select category" })}
              placeholder="enter instructions"
            >
              <option className="text-sm" value={"Dinner"}>
                Dinner
              </option>
              <option className="text-sm " value={"BreakFast"}>
                Breakfast
              </option>
              <option className="text-sm" value={"Summar"}>
                Summar
              </option>
              <option className="text-sm" value={"Lunch"}>
                Lunch
              </option>
            </select>
            <small className="text-sm text-red-300  ">
              {errors?.title?.message}
            </small>
            <div className="flex gap-2">
              <button className="p-3 text-sm text-gray-950 w-[50%] bg-pink-300 font-thin rounded">
                Update Recipie
              </button>
              <button
                type="button"
                className="p-3 text-sm text-gray-950 w-[50%] bg-pink-300 font-thin rounded"
                onClick={() => handleDelete(id)}
              >
                Delete Recipie
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipie;
