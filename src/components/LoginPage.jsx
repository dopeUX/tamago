import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();
    const login = () =>{ 
       if(email!==''&&password!==''){
          localStorage.setItem('user', email); 
          nav('/home'); 
       }else{
           alert('please enter the correct email and password');
       }
    }
    return (
        <div className="login-page">
            <section className="login-page-section">
               <h1>Tamado</h1>
               <input type="text" placeholder="email" onChange={(e)=>{
                  setEmail(e.currentTarget.value);
               }}/>  
               <input type="password" placeholder="password" id="" onChange={(e)=>{
                   setPassword(e.currentTarget.value);
               }}/>
               <button onClick={()=>{
                   login();
               }}>Sign in</button>
            </section>
        </div>
    )
}