import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    return (
<>
    <div className="container">

        <h1 className="number">{count}</h1>
    </div>

    <section className="buttons">
            
            <button className="btn" 
            onClick={() => setCount((prevCount) => (prevCount + 1))}>Increase</button>
            <button className="btn" 
            onClick={() => setCount((prevCount) => (prevCount - 1))}>Decrease</button>
            <button className="btn" 
            onClick={() => setCount(0)}>Reset</button>
    </section>
    
</>

    )
}

export default Counter