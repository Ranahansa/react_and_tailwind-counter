import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    return (
<div className="bg-gray-800 h-screen flex flex-col justify-center items-center text-center text-white">
    <div className="container">

        <h1 className="number text-8xl">{count}</h1>
    </div>

    <section className="buttons w-[40rem] flex justify-around mt-20">
            
            <button className="btn px-[20px] py-[10px] rounded-[100px] text-[2rem] bg-[#141517] text-[#fff] cursor-pointer hover:bg-sky-300" 
            onClick={() => setCount((prevCount) => (prevCount + 1))}>+</button>
            <button className="btn btn px-[20px] py-[10px] rounded-[100px] text-[2rem] bg-[#141517] text-[#fff] cursor-pointer hover:bg-sky-300" 
            onClick={() => setCount((prevCount) => (prevCount - 1))}>-</button>
            <button className="btn btn px-[20px] py-[10px] rounded-[100px] text-[2rem] bg-[#141517] text-[#fff] cursor-pointer hover:bg-sky-300" 
            onClick={() => setCount(0)}>Reset</button>
    </section>
    
</div>

    )
}

export default Counter