import React, { useEffect } from 'react';
import { useState } from 'react';
function Counter(){
    const [count,SetCount]=useState(0);
    const [calculation,SetCalculation]=useState(0);
    useEffect()=>{
        SetCalculation(()=>count*2);
        },[count];
        return(
            <>
            <p>Count:{count}</p>
            <button onClick={()=>SetCount((c)=>c+1)}+</button>
            <p>calculation:{calculation}</p>
            </>
        );
}