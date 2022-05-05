import React from "react";
import { useNavigate } from "react-router-dom";

export default function HotelsCard(props){
    const nav = useNavigate();
    function checkLoggedIn(){
        const key = localStorage.getItem('user');
        if(key){
            return true;
        }else{
            return false;
        }
    }

    function goToCheckout(name, price,img, location, rating){
   
      if(checkLoggedIn()){
          nav('/checkout-page',  {
              state:{
                hotelName:name,
                price:price,
                img:img,
                location:location,
                rating:rating   
              }
          })
      }else{
          // go to login page -----
          nav('/login-page')
      }
    }
    return (
        <div className="hotels-card">
           <img src={props.img} alt="" />
           <h2>{props.name}</h2>
           <h3 className="hotels-card-location">{props.location}</h3>
           <h3>${props.price}</h3>
           <h3>{props.rating}</h3>
           <button onClick={()=>{
              console.log(goToCheckout(props.name, props.price,props.img, props.location, props.rating))
           }}>Book now</button>
        </div>
    )
}