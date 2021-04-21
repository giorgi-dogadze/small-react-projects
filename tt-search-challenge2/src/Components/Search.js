import React from 'react'
import styles from '../Styles/Search.module.css'

function Search({query, handleQueryChange,handleCounterChange, handleTakeChange}) {

    function queryChangeHandler(e){
        handleQueryChange(e.target.value)
    }

    function counterChangeHandler(e){
        handleTakeChange(7)
        e.preventDefault()
        handleCounterChange(prevCounter => prevCounter + 1)
    }

    return (
        <div>
            <form onSubmit={counterChangeHandler}>
                <div className = {styles["search-bar"]}>
                    <div className={styles["icon-input"]}>
                        <div className = {styles["icon-container"]}><div className= {styles["inner-icon"]}></div></div>
                        <input type = "text" value = {query} onChange = {queryChangeHandler} placeholder="Find your dream job" className = {styles["query-input"]}></input>
                    </div>
                    <button type = "submit" className={styles["btn-Sumbit"]}>Search</button>
                </div>

            </form>
        </div>
    )
}

export default Search
