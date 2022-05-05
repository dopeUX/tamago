import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CheckoutPage(){
    const location = useLocation();
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="checkout-page">
           <div className="header">
                <h1>Checkout</h1>
           </div>
           <div className="hotel-section">
                <section className="hotel-component">
                  <img src={location.state.img} alt="" /> 
                  <div className="hotel-component-details">
                    <h2 className="name">{location.state.hotelName}</h2>
                    <h2 className="location">{location.state.location}</h2>
                    <h3>{location.state.price}</h3>
                    <h3 className="from">From :</h3>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    <h3 className="from">To :</h3>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                   <button onClick={()=>{
                       alert('Your hotel booking confirmed !')
                   }}>Confirm booking</button>
                  </div>
                </section>
            </div>
        </div>
    )
}