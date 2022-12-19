import React, { useState } from "react";

const Count = () =>{
    const inc_btn = {
        backgroundColor: "green",
        width: "100px",
        padding: "10px",
        borderRadius: "10px",
        marginRight: "20px",
        color: "white",
        border:"none"
      };
    
      const dec_btn = {
        backgroundColor: "red",
        width: "100px",
        padding: "10px",
        borderRadius: "10px",
        color: "white",
        border:"none"
      };
    
      const content = {
        textAlign: "center",
        marginTop: "200px",
      };
    
      const [count, setCount] = useState(0);
    
      const inc = () => {
        setCount(count + 1);
      };
    
      const dec = () => {
        setCount(count - 1);
    
        if(count==0){
          setCount(0);
        alert("No Decrement") }
      };
    
      return (
        <>
          <div style={content}>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <button onClick={inc} style={inc_btn}>
              Increment
            </button>
            <button onClick={dec} style={dec_btn}>
              Decrement
            </button>
          </div>
        </>
      )
}

export default Count;