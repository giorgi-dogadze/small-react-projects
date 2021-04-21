import React,{useState,useEffect,useRef} from 'react'

export default function HookTimerWithRef() {

    const [timer, setTimer] = useState(0)
    const attachref = useRef(null)
    


    useEffect(() =>
    {
        attachref.current = setInterval(() => {
            setTimer(prevTimer => prevTimer +1)
        },1000)
        return (() => 
        {clearInterval(attachref.current)})
    },[])


    const continueInterval = () =>
    {
        attachref.current = setInterval(() => {
            setTimer(prevTimer => prevTimer +1)
        },1000)
    }

    return (
        <div>
            Time - {timer}
            <button onClick={() =>{clearInterval(attachref.current)}}>Stop Timer</button>
            <button onClick={continueInterval}> continue counting</button>
        </div>
    )
}
