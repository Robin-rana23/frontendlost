
import React from "react";
import  {createContext} from "react";

const Context1 = createContext()



const SampleContext =({children})=> {  
    function sayHello(){
        console.log("Hello User")
    }
    return(
        <Context1.Provider   value={{age  }}> 
        {children}</Context1.Provider>
    )
}

export default SampleContext