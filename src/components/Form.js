import React from "react";
import { useState } from "react";


const Form=()=>{
    
    let [firstName,setFirstName]=useState('');
    let[lastName,setLastName]=useState('');
    let [email,setEmail]=useState('');
    let [password,setPassword]=useState('');
    let [confirmPassword,setConfirmPassword]=useState(''); 



    
    const saveData=()=>{
        console.log(firstName,lastName,email,password,confirmPassword)
    
    }
    return(
        <div>
       <p>First Name</p>
       <input type="text" placeholder="enter firstName" 
       onChange={(e)=>{setFirstName(e.target.value)}}></input>
       <p>Last Name</p>
       <input type="text" placeholder="enter lastName"
       onChange={(e)=>{setLastName(e.target.value)}}></input> 
       <p>Email</p>
       <input type="text" placeholder="enter email"
       onChange={(e)=>{setEmail(e.target.value)}}></input>
       <p>Password</p>
       <input type="text" placeholder="enter password"
       onChange={(e)=>{setPassword(e.target.value)}}></input>
       <p>Confirm Password</p>
       <input type="text" placeholder="enter confirm password"
       onChange={(e)=>{setConfirmPassword(e.target.value)}}></input>
       <button onClick={saveData}>Submit</button> 
        </div>
        )
            

        
}


export default Form;