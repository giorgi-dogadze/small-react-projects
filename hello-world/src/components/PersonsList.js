import React from 'react'
import FunctionForList from './FunctionForList'

function PersonsList() {
    const Persons = [
        {
            name: "gio",
            id: 1,
            age: 20,
            skill: "hardworking,maybe?"
        },
        {
            name: "tako",
            id: 2,
            age: 24,
            skill: "Phycolog"
        },
        {
            name: "zaza",
            id: 3,
            age: 53,
            skill: "engineer"
        },
        {
            name: "xatuna",
            id: 4,
            age: 49,
            skill: "teacher"
        }
    ]
    const Personlist = Persons.map(person => FunctionForList(person))
    return (
        <div>
            {Personlist}
        </div>
    )
}

export default PersonsList
