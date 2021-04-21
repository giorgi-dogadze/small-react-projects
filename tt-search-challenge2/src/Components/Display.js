import React, {useEffect} from 'react'
import axios from 'axios'
import JobComponent from './JobComponent'
import styles from '../Styles/Display.module.css'

function Display({query, handleQueryChange, counter, field, jobs, handleJobChange, take, handleTakeChange, skip, handleSkipChange}) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlYXJjaC1jaGFsbGVuZ2VAdHQuZ2UiLCJzdWIiOiJlOGE3N2E4OS00MzM2LTQyYzYtOWZiYS1hZDY4ODU2YzkzMmEiLCJpYXQiOjE2MTA4NzQzNTgsImV4cCI6MTYxMzQ2NjM1OH0.CEa_eMgGrkzlULWt76D8-E-QzH45tlM99c7_IVk4dd0"
    
    var URL = field === "null" ? `https://api-staging.tt.ge/search/jobs?query=${query}&skip=${skip}&take=${take}` : `https://api-staging.tt.ge/search/jobs?fieldId=${field}&query=${query}&skip=${skip}&take=${take}`
    var URL_2 = field === "null" ? `https://api-staging.tt.ge/search/jobs?take=7` : `https://api-staging.tt.ge/search/jobs?fieldId=${field}&take=7`


    useEffect(() => {
        axios.get("https://api-staging.tt.ge/search/jobs?take=7",{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res => {
          handleJobChange(res.data.items)
        }).catch(err => 
            {console.log(err)}
        )
      }, [])


      useEffect(() => {//changes job when load more on submit is pressed
        clearJobs()
        axios.get(URL,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
        handleJobChange(res.data.items)
        // prevState => [...prevState, res.data.items]  res.data.items
        // console.log(jobs)
        }).catch(err => {console.log(err)})
      },[counter,take])


      useEffect(() => {
        axios.get(URL_2,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res => {
          handleJobChange(res.data.items)
        }).catch(err => 
            {console.log(err)}
        )
      }, [field])


      function clearJobs(){
        handleJobChange([])
      }

      function LoadMoreHandler(){
        handleTakeChange(prevTake => prevTake + 7)
        // console.log(take)
      }


    return (
        <div>
          
            <div className = {styles["job-flex-container"]}>
              { 
                jobs.map(job => (
                <JobComponent key = {job.id} name = {job.name} company_url = {job.company.logoUrl}
                  company_name = {job.company.name}
                  tags = {job.tags} isActive = {job.state}
                  createdAt = {job.createdAt} salary = {job.salary}
                />)
                )}

              <button className = {styles["load-more"]} onClick = {LoadMoreHandler}>Load More</button>
            </div>
        </div>
    )
}

export default Display