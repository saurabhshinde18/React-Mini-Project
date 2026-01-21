import React from 'react'
import axios from '../utils/axios.jsx';
import { useEffect } from 'react';
const Home = () => {

  const getproducts = async()=>{
   try{
     let res= await axios.get('/products');
     console.log(res.data.products);
   }catch(err){
    console.log(err);
   }
  }
  useEffect(()=>{
    getproducts();
    console.log("home page mounted");
     return ()=>{
      console.log("home page unmounted");
     }
  })
  return (
    <>
    <div>Home</div>
    
    </>
  )
}

export default Home