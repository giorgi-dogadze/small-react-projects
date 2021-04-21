import React, {useState, useRef, useCallback} from 'react'
import useBookSearch from './useBookSearch'
import './App.css'

export default function App(){

  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {loading, error, books, hasMore} =   useBookSearch(query, pageNumber)

  const observer = useRef()
  const lastBookElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])


  function handleSearch(e){
    setQuery(e.target.value)
    setPageNumber(1)
  }

  return(
    <>
      <input type="text" value={query} onChange={handleSearch}></input>
      <ul>
              {books.map((book, index) => {
        if (books.length === index + 1) {
          return <li ref={lastBookElementRef} key={book}>{book}</li>
        } else {
          return <li key={book}>{book}</li>
        }
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
      </ul>

    </>
  )
}