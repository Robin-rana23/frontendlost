import React, { useState } from 'react'

const StateLift =({getDataFunc}) =>{
    const [kalu, setKalu]=useState("")
    getDataFunc("priyanshu")
    console.log(getDataFunc)

    return(
          
        <div>StateLift
           <div>
            <input type="text" onChange={(e)=>setKalu(e.target.value)}/>  
            <h2>{kalu}</h2>
           </div>
            
        </div>
    )
}

export default StateLift
