import { useEffect, useReducer } from "react"; 
import axios  from "axios";


const intialState = {
    loading: "",
    isError: false,
    data: []
}

const apiReducer = (state, action) => {
    switch(action.type){
        case "START":
            return { ...state, loading:"loading..."};
        case "SUCCESS":
            return { ...state, loading:"", data: action.payload};
        case "FAIL":
            return { ...state, loading:"", isError: true, data: action.payload};
        default:
            return state;    
    }
}


const Reducer = (url) => {
    const [data, dispatch] = useReducer(apiReducer, intialState);
    useEffect(() => {
        dispatch({
            type: "START"
        });
        // console.log(url)
        axios.get(url)
        .then(res => {
            console.log("Reducer",res.data)
            dispatch({type:"SUCCESS", payload: res.data.results});
        })
        .catch(err => {
            dispatch({type:"FAIL", payload: err})
        })
        
    },[])

    return data; 
}


export default Reducer; 