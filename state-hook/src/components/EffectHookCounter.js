import React,{useState, useEffect} from 'react'

export default function EffectHookCounter() {

    const[count, setCount] = useState(0)
    const[name, setName] = useState("")

    useEffect(() =>
    {
        document.title = `you clicked ${count} times`
        console.log("hi")
    },[count])
    

    return (
        <div>
            <input value = {name} onChange = {e => setName(e.target.value)}></input>
            <button onClick = {() => setCount(count + 1)}>you clicked {count} times</button>
            
        </div>
    )
}
