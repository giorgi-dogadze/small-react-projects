import React,{useReducer} from 'react'

const setInitial = 0
const reducer = (state, action) =>
{
    switch(action)
    {
        case "increment":
            return state +1
        case "decrement":
            return state -1
        case "reset":
            return setInitial
        default:
            return state

    }
}

export default function FirstUseReducre() {

    const [count, setCount] = useReducer(reducer, setInitial)

    return (
        <div>
            <div>Count - {count}</div>
            <button onClick = {() => setCount("increment")}>Increment</button>
            <button onClick = {() => setCount("decrement")}>Decrement</button>
            <button onClick = {() => setCount("reset")}>Reset</button>
        </div>
    )
}
