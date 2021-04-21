import React from 'react'
import styles from '../Styles/JobComponent.module.css'

function JobComponent({name, company_url, company_name, tags, isActive, createdAt, salary}) {

    const BASE_URS = "https://s3.eu-central-1.amazonaws.com/public.tt.ge"
    const is_Empty_Comp_url = company_url ? company_url : "/images/logos/redberry.png"
    const Company_URL = `${BASE_URS}${is_Empty_Comp_url}`


    // const now = new Date()
    // console.log(typeof(createdAt))
    // console.log(now)

    // const timeDiff = now - createdAt
    // console.log(timeDiff)

    const noww = new Date()
    const now = noww.valueOf()  //miliseconds from 1970 to now
    const then = Date.parse(createdAt)  // miliseconds from 1970 to job creation date
    const getFullHour = Math.round((now - then) / 1000 /60 /60)
    const getDays = Math.floor(getFullHour / 24)
    const getHour = Math.floor(getFullHour % 24)

    const money = salary ? salary : "Salary"


    return (
        <div className = {styles["flexible-job-item"]}>
            <div className = {styles["company-photo-div"]}>
                <img className={styles["company-img"]} src = {Company_URL} alt = "img"></img>
            </div>
            
            <div className = {styles["position-company-div"]}>
                <div>{name}</div>
                <div className = {styles["company-name"]}>{company_name}</div>
            </div>

            <div className = {styles["tags-status"]}>
                <div className = {styles["tags-status-div-1"]}>{tags.map((tag,index) => (<span key = {index}>{"#"}{tag}{" "}</span>))}</div>
                <div className = {styles["tags-status-div-2"]}>
                    <div className = {styles["tags-status-div-2-div-1"]} style={{ backgroundColor: isActive === "Active" ? "#18C729" : "red" }} ></div>
                    <div className = {styles["tags-status-div-2-div-2"]}>Added {getDays} days and {getHour}</div>
                </div>
            </div>

            <div className = {styles["salary"]}>
                <div className = {styles["salary-icon"]}>₾</div>
                <div className = {styles["salary-money"]}>{money}</div>
            </div>

            <button className = {styles["apply-button"]}>Apply</button>
        </div>
    )
}

export default JobComponent
