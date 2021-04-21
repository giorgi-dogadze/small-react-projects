import React, {useState, useEffect} from 'react'
import styles from '../Styles/Filter.module.css'

function Button({text, id, fld, handleFieldChange, isActive, handleIsActiveChange}) {
    function buttonClickHandler(){
        handleFieldChange(fld.id)
        handleIsActiveChange(id)

        
    }

    return (
        <>
            <button style={{backgroundColor: id === isActive ? "#7B7CE6" : "#F1F1F5", color: id === isActive ? "white" : "black"  }} className = {styles["btn"]} onClick = {buttonClickHandler}>{text}</button>
        </>
    )
}

export default Button
