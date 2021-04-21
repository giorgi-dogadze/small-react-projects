import React from 'react'
import Filter from './Filter'
import Search from './Search'

function Header({query, handleQueryChange, handleCounterChange, handleFieldChange, handleTakeChange}) {

    return (
        <div>
            
            <Filter handleFieldChange = {handleFieldChange}
            />
            <Search query = {query} handleQueryChange = {handleQueryChange}
            handleCounterChange = {handleCounterChange}
            handleTakeChange = {handleTakeChange}  //when clicking on another field selector to give this variable number 7
            />

        </div>
    )
}


export default Header