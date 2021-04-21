import React, {useState} from 'react'

export default function HookWithObject() {

    const [name, setName] = useState({firstName:"", lastName:""})

    return (
        <div>
            <input
             type ="text"
             value = {name.firstName}
             onChange = {(e) => setName({...name, firstName:e.target.value})}
             />

             <input
             type = "text"
             value = {name.lastName}
             onChange = {(e) => setName({...name, lastName:e.target.value})}
             />

             <h2>Name = {name.firstName} {name.lastName}</h2>
        </div>
    )
}
