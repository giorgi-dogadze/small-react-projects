import React,{useState,useEffect} from 'react'

export default function TimerWithHook() {

    const [count, setCount] = useState(0)
    
    const ticks = () =>
    {
        setCount(count + 1)
    }

    useEffect(() =>{
        const interval = setInterval(ticks, 1000)

        return () =>
        
        {
            clearInterval(interval)
        }

    },[count]) 

    return (
        <div>
            {count}
        </div>
    )
}
