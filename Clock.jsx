import { useEffect, useState } from "react";
import { ClokInfo } from "./ClokInfo";

 

 function Clok(){

    const[time,setTime]=useState(0);
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);

    },[])
    return(
        <>
        <ClokInfo/>
        <h1>{time}</h1>
   
        
        </>
    )
 }

 export default Clok;