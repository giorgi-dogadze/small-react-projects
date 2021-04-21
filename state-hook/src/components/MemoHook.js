import React, {useState} from 'react'

function MemoHook() {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const incrementCounter1 = () =>
    {
        setCounter1(counter1+1)
    }

    const incrementCounter2 = () =>
    {
        setCounter2(counter2+1)
    }

    const clear = () =>
    {
        setCounter1(0)
        setCounter2(0)
    }

    

    const smth =(x) =>
    {
        if(x % 2 ==1)
        {
            return "even"
        }
        else if (x == 0)
        {
            return ""
        }
        else
        {
            return "odd"
        }
    }

    return (
        <div>
            <div>
                <button onClick = {incrementCounter1}>Click me</button>
                <span>conter one - {counter1} - {smth(counter1)}</span>                
            </div>

            <div>
                <button onClick = {incrementCounter2}>Click me</button>
                <span>conter two - {counter2} - {smth(counter2)}</span>
            </div>
            <button onClick={clear}>CLEAR</button>
        </div>
    )
}

export default MemoHook
