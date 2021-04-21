import React, {useState} from 'react'
import './App.css';
import Header from './Components/Header'
import Display from './Components/Display'
<link href="https://s3.eu-central-1.amazonaws.com/public.tt.ge/fonts/font.css" rel="stylesheet" type="text/css" />

function App() {
  const [query, setQuery] = useState('')   //variable for input
  const handleQueryChange = (newValue) => setQuery(newValue)
  const [counter, setCounter] = useState(0)  //variable for submit button
  const handleCounterChange = (newValue) => setCounter(newValue)
  const [jobs, setJobs] = useState([])  //array for jobs
  const handleJobChange = (newValue) => setJobs(newValue)
  const [field, setField] = useState('null')//for field selector
  const handleFieldChange = (newValue) => setField(newValue)
  const [take, setTake] = useState(7) 
  const handleTakeChange = (newValue) => setTake(newValue)
  const [skip, setSkip] = useState(0)
  const handleSkipChange = (newValue) => setSkip(newValue)
  return (
    <div id = "App">

      <Header query = {query} handleQueryChange = {handleQueryChange}
      handleCounterChange = {handleCounterChange}
      handleFieldChange = {handleFieldChange}
      handleTakeChange = {handleTakeChange}
      />

      <hr className="break-line"></hr>

      <Display query = {query} handleQueryChange = {handleQueryChange}
      counter = {counter} field={field}
      jobs = {jobs} handleJobChange = {handleJobChange}
      take = {take} handleTakeChange = {handleTakeChange}
      skip = {skip} handleSkipChange = {handleSkipChange}
      />



      {/* {console.log(query)}
      {console.log(field)} */}
      {/* {console.log(counter)} */}

    </div>
  )
}

export default App
