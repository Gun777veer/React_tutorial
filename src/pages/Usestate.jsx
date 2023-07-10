import React, { useState } from 'react'

export const Usestate = () => {

    const [count, setCount]=useState(()=>{
        return 0
    });

    function countDecrease(){
        setCount(prevCount=>prevCount-1);
    }

    function countIncrease(){
        setCount(prevCount=>prevCount+1);
    }

  return (
    <div>
        <h1>USE STATE</h1>
        <button onClick={countDecrease}>-</button>
        <span>{count}</span>
        <button onClick={countIncrease}>+</button>
    </div>
  )
}
