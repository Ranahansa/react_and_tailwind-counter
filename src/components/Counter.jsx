import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    return (
<div className="bg-gray-800 h-screen flex flex-col justify-center items-center text-center text-white">
    <div className="container">

        <h1 className="number text-8xl">{count}</h1>
    </div>

    <section className="buttons w-[40rem] flex justify-around mt-20">
            
            <button className="btn" 
            onClick={() => setCount((prevCount) => (prevCount + 1))}>Increase</button>
            <button className="btn" 
            onClick={() => setCount((prevCount) => (prevCount - 1))}>Decrease</button>
            <button className="btn" 
            onClick={() => setCount(0)}>Reset</button>
    </section>
    
</div>

    )
}

export default Counter