// import React, {useState, useEffect} from 'react'
// import './App.css';
// import Button from './Components/Button'
// import axios from 'axios'
// import Header from './Components/Header'
// import Cda from './Components/Cda'
// // import useJobSearch from './Hooks/useJobSearch'

// // export const UserContext = React.createContext()

// function App() {
//   const [exp, setExp] = useState('gio')
//   const [query, setQuery] = useState('')
//   const [jobs, setJobs] = useState([])
//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlYXJjaC1jaGFsbGVuZ2VAdHQuZ2UiLCJzdWIiOiJlOGE3N2E4OS00MzM2LTQyYzYtOWZiYS1hZDY4ODU2YzkzMmEiLCJpYXQiOjE2MTA4NzQzNTgsImV4cCI6MTYxMzQ2NjM1OH0.CEa_eMgGrkzlULWt76D8-E-QzH45tlM99c7_IVk4dd0"



//   useEffect(() => {
//     axios.get('https://api-staging.tt.ge/search/jobs',{
//       headers: {
//         'Authorization': `bearer ${token}`
//       }
//     })
//     .then(res => {
//       setJobs(res.data.items)
//     }).catch(err => {console.log(err)})
//   }, [])

//   function queryChangeHandler(e){
//     setQuery(e.target.value)
//   }

//   function clearJobs(){
//     setJobs([])
//   }


//   function submitHandler(e){
//     e.preventDefault()
//     clearJobs()
//     axios.get(`https://api-staging.tt.ge/search/jobs?query=${query}&take=15`,{
//       headers: {
//         'Authorization': `bearer ${token}`
//       }
//     })
//     .then(res => {
//       setJobs(res.data.items)
//       console.log(jobs)
//     }).catch(err => {console.log(err)})
//   }

//   const handleChanger = (newValue) => setExp(newValue)

//   const button = document.querySelectorAll('Button') 
//   return (
//     <div id = "App">


//       <Cda value = {exp} handleChange = {handleChanger}/>
//       {console.log(exp)}
//       {/* <UserContext.Provider value = {exp}></UserContext.Provider> */}
//      {/* <Header name = {exp}/>
//       {console.log(exp)} */}
//       <Header/>
//       <div class = "button-grid">
//         <Button text = "all"/>
//         <Button text = "Development"/>
//         <Button text = "Design"/>
//         <Button text = "Marketing"/>
//         <Button text = "DevOps"/>
//         <Button text = "QA"/>
//         <Button text = "Ai"/>
//         <Button text = "Product"/>
//       </div>

//       <form onSubmit = {submitHandler}>
//         <input type = "text" value = {query} onChange = {queryChangeHandler}></input>
//         <button type = "submit">Search</button>
//         <h3>HI</h3>
//       </form>

//       <ul>
//       { jobs.map(job => (<li key = {job.id}>{job.name}</li>)) }
//       </ul>


//   </div>
//   );
// }

// export default App;
