import React, { useState } from 'react'
import { createContext } from 'react';
export const recipiesdata = createContext(null);
const Recipiecontext = (props) => {
    const [recipies,setrecipies] =useState([
  {
    "id": 1,
    "title": "Paneer Butter Masala",
    "description": "A rich and creamy North Indian curry made with paneer cubes cooked in a tomato-butter gravy.",
    "ingridiants": "Paneer, tomato, onion, butter, cream, ginger-garlic paste, cashews, garam masala, red chili powder",
    "instructions": "Heat butter, sauté onions and ginger-garlic paste. Add tomato puree and spices. Cook well, add paneer and cream, simmer for 5 minutes.",
    "category": "Indian Main Course",
    "image": "https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3.jpg"
  },
  {
    "id": 2,
    "title": "Margherita Pizza",
    "description": "Classic Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
    "ingridiants": "Pizza dough, tomato sauce, mozzarella cheese, fresh basil, olive oil, salt",
    "instructions": "Spread sauce on dough, add mozzarella, bake at high temperature until crust is golden. Garnish with basil and olive oil.",
    "category": "Italian",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWwNz-YV88e3LFP6iisBcZT-loky1VotV4aQ&s"
  },
  {
    "id": 3,
    "title": "Veg Burger",
    "description": "A crispy vegetable patty burger loaded with fresh veggies and sauces.",
    "ingridiants": "Burger buns, potato patty, lettuce, tomato, onion, cheese, mayonnaise",
    "instructions": "Toast buns, fry patty, assemble burger with veggies, cheese, and sauces. Serve hot.",
    "category": "Fast Food",
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    "id": 4,
    "title": "Chocolate Brownie",
    "description": "Dense and fudgy chocolate brownie with a rich cocoa flavor.",
    "ingridiants": "Dark chocolate, butter, sugar, eggs, flour, cocoa powder",
    "instructions": "Melt chocolate and butter, mix with sugar and eggs. Fold in flour and cocoa. Bake until set.",
    "category": "Dessert",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
  },
   {
    "id": 5,
    "title": "Veg Biryani",
    "description": "Aromatic basmati rice cooked with marinated Vegetables, spices, and herbs in a traditional dum style.",
    "ingridiants": "vegetables, basmati rice, onion, yogurt, ginger-garlic paste, saffron, garam masala, mint",
    "instructions": "Marinate Vegetables with spices and yogurt. Parboil rice. Layer chicken and rice, seal the pot, and cook on low heat until done.",
    "category": "Indian Rice Dish",
    "image": "https://www.cookingcarnival.com/wp-content/uploads/2025/09/Vegetable-Dum-Biryani-5.jpg"
  },
  {
    "id": 6,
    "title": "Pasta Alfredo",
    "description": "Creamy Italian pasta tossed in a rich Alfredo sauce made with butter, cream, and parmesan.",
    "ingridiants": "Pasta, butter, garlic, fresh cream, parmesan cheese, black pepper",
    "instructions": "Boil pasta. Sauté garlic in butter, add cream and cheese. Toss pasta with sauce and serve hot.",
    "category": "Italian Pasta",
    "image": "https://images.unsplash.com/photo-1588013273468-315fd88ea34c"
  }
]
);
  return (
    <recipiesdata.Provider value={[recipies,setrecipies]}>
        {props.children}
    </recipiesdata.Provider>
  )
}

export default Recipiecontext;