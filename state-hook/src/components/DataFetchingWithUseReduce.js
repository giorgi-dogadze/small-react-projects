import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const InitialState = {
    loading: true,
    err:'',
    posts:{}
}

const reducer = (state,action) =>
{
    switch(action.type)
    {
        case "Fetching_Success":
            return {
                loading:false,
                err: '',
                posts: action.payload
                
            }
            case "Fetching_Failed":
                return{
                    loading:false,
                    err:"something went wrong",
                    posts:{}
                }
            
            default:
                return state
    }
}

export default function DataFetchingWithUseReduce() {
    useEffect( () => {
        axios
            .get("http://jsonplaceholder.typicode.com/posts/1")
            .then(res => {
                dispatch({type:"Fetching_Success", payload: res.data})
            })
            .catch(err => 
                {
                    dispatch({type:"Fetching_Failed"})
                })
        },[])

    const[state, dispatch] = useReducer(reducer, InitialState)
    return (
        
        <div>

            {state.loading ? 'loading': state.posts.title}
            {state.err ? state.err: null}
        </div>
    )
}
