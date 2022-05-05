import React from "react";
import HotelsCard from "./HotelsCard";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Hotels(){
    const hotelList = useSelector(state=>state.app.hotels);
    const searchQuery = useSelector(state=>state.app.searchQuery);
    const city = useSelector(state=>state.app.city);
    return (
        <div className="hotels-section hero">
            {
              hotelList.filter(x=>{
                return x.name.toLowerCase().includes(searchQuery.toLowerCase())  
              }).filter(x=>{
                  return x.location.toLowerCase().includes(city.toLowerCase())
              }).map((y,i)=>{
                  return <HotelsCard key={i}
                  name={y.name}
                  img = {y.img}
                  location={y.location}
                  price={y.price}
                  rating={y.rating}/>
              })
          
            }
        </div>
    )
}

