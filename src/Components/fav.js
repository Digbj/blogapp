import React, { useContext } from "react";
import { FavouritesContext } from "./fabcontext";


const Fav = () => {
  const { favourites } = useContext(FavouritesContext);
console.log(favourites)
  return (
    <div className="fab12">
      <h2>Favourite Items</h2>
      {favourites.map((data)=>{
        return(
          <ul key={data?.id} className="li">
            {data.title}
          </ul>
        )
      })}
      
    </div>
  );
};

export default Fav;
