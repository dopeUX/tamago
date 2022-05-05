import React,{useRef, useState} from "react";
import { updateSearchQuery, updateHotelsListWithCity, updateCity} from "../AppSlice";
import { useDispatch } from "react-redux/es/exports";

export default function Header(){
    const dispatch = useDispatch();
    const locationBoxRef = useRef();
    let a = 0;
    const [currentCity, setCurrentCity] = useState('All');
    const cities = [
        'All',
        'Washington DC',
        'Paris',
        'Bangkok',
        'Dubai',
        'Singapore',

    ]

    const changeLocationBoxState = () =>{
        if(a===0){
         locationBoxRef.current.style.display = 'block';  
         a=1;
        }else{
         locationBoxRef.current.style.display = 'none';  
         a=0;
        }
     }

    return(
        <div className="header hero">
           <div className="header-top"> 
           <h1>Tamago</h1>

           <button className="login-btn">Login</button>
           </div>
            <div className="search-section">
                <input type="text" placeholder="search here.."
                onChange={(e)=>{
                    //console.log(e.currentTarget.value)
                   dispatch(updateSearchQuery(e.currentTarget.value));
                }}/>

                <div className="location-filter" onClick={()=>{
                    changeLocationBoxState();
                }}>
                    <h3>{currentCity}</h3>
                    <img src="/assets/down.png" alt="" />
                    <div ref={locationBoxRef} className="location-box">
                       {
                         cities.map(x=>{
                           return <h3 className="city" onClick={()=>{
                            if(x==='All'){
                                setCurrentCity('All');
                                dispatch(updateCity(''));
                            }else{  
                                setCurrentCity(x);
                                dispatch(updateCity(x));
                            }
                           }}>{x}</h3> 
                         })
                       } 
                    </div>
                </div>

               
            </div>
        </div>
    )
}