import { nanoid } from 'nanoid';
import React, { useContext } from 'react'
import { useForm} from 'react-hook-form';
import { toast } from 'react-toastify';
import { recipiesdata } from '../context/Recipiecontext';
const Create = () => {
  const {
      register,handleSubmit,reset,formState: { errors },
    } = useForm();  
  
    const [recipies,setrecipies] = useContext((recipiesdata));
    function handleForm(data){
      data.id = nanoid();
      setrecipies([...recipies,data]);
    
      toast.success("Recipie Created Successfully");
      reset();
    }
     console.log(recipies);

  return (
    <>
    <div className="w-[40%] ml-[20%] mt-10">
         <form onSubmit={handleSubmit(handleForm)} className='flex flex-col gap-6'>
        <input className='text-amber-400 text-xl border-b outline-0 p-2 ' {...register('title',{required:"the title cant be empty"})} placeholder='enter recipie name' type='text' ></input>
        <small className='text-sm text-red-300  '>{errors?.title?.message}</small>

        <input className='text-amber-400 text-xl border-b outline-0 p-2 ' {...register('image',{required:"the url cant be empty"})} placeholder='enter image url ' type='text' ></input>
        <small className='text-sm text-red-300  '>{errors?.title?.message}</small>

          <input className='text-amber-400 text-xl border-b outline-0 p-2 ' {...register('description',{required:"the description cant be empty"})} placeholder='enter description here' ></input>
        <small className='text-sm text-red-300  '>{errors?.title?.message}</small>

        <textarea className='text-amber-400 text-xl border-b outline-0 p-2 ' {...register('ingridiants',{required:"the ingridiants cant be empty"})} placeholder='enter recipie ingridiants' />
        <small className='text-sm text-red-300  '>{errors?.title?.message}</small>

       <textarea className='text-amber-400 text-xl border-b outline-0 p-2 ' {...register('instructions',{required:"the instructions cant be empty"})} placeholder='enter instructions' />
        <small className='text-sm text-red-300  '>{errors?.title?.message}</small>

          <select className='text-amber-400 text-xl border-b outline-0 p-2 ' {...register('category',{required:"select category"})} placeholder='enter instructions'  >
          <option className='text-sm'>Fast-Food 1</option>
          <option className='text-sm '>Maharastrian 2</option>
          <option className='text-sm'>Italian 3</option>
           <option className='text-sm'>Indian Main Course</option>
          </select>
        <small className='text-sm text-red-300  '>{errors?.title?.message}</small>

         <button className='p-3 text-sm text-gray-950 w-[20%] bg-pink-300 font-thin rounded'>Add Recipie</button>
       
    </form>
      </div>
    
    
    </>
  )
}

export default Create