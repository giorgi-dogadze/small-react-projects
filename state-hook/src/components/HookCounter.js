import React, {useState} from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)

    const clickHandler = (prevCounta) =>
    {
        for(var i = 0; i<5; i++)
        {
            setCount(prevCounta => prevCounta+1);
        }
    }

    return (
        <div>
            <button onClick = {clickHandler}>Hook Count {count}</button>
        </div>
    )

   
} 
 export default HookCounter