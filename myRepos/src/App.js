import React, {useEffect, useState} from 'react'
import './App.css'
//import axios from 'axios'
import List from './components/List'
import withListLoading from './components/withListLoading'

function App(){
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading:false,
    repos:null
  })

  useEffect(() => {
    setAppState({loading:true})
    const apiUrl = `https://api.github.com/users/hacktivist123/repos`
    fetch(apiUrl).then((res)=> res.json()).then((repos) => { setAppState({loading:false, repos:repos})})
    //es rom axio-ti gagveketebina da zustad igive sheddegi gveqneboda
    // axios.get(apiUrl).then((repos) => {
    //   const allRepos = repos.data;
    //   setAppState({ loading: false, repos: allRepos });
    // });
  },[setAppState]);

  return (
    <div className= "App">
      <div className = 'container'>
        <h1>My Repositories</h1>
      </div>
      <div className = "repo-container">
        <ListLoading isLoading = {appState.loading} repos = {appState.repos} />
      </div>
      <footer>
        <div className = "footer">
          Built{' '}
          <span role = "img" aria-label = "love">
             with love!
          </span>{' '}
           by Giorgi Dogadze
        </div>
      </footer>

    </div>
  )
}

export default App;