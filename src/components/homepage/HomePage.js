import { useState, useEffect } from "react";
import LogicTest from "./checkLogic/LogicTest";

const HomePage = () => {

    const [count, setCount] = useState(0);
    const [errorMsg, setErrorMsg] = useState(false);

    useEffect(()=>{
        if(count < 0){
            setCount(0);
            setErrorMsg(true);
            // alert("number can not below than 0");
        }
        else if(count > 0){
            setErrorMsg(false);
        }
    })

    return(
        <>
            <div className="title-container">
                <h3>Home page</h3>
            </div>
            <div className="content-container">
                <p>Counting number {count}</p>
                <span>{errorMsg === true && <h6 style={{color:"red"}}>number can not below than 0</h6>}</span>
                <button 
                    className="btn btn-primary" 
                    style={{marginRight: 10}}
                    onClick={()=>{(
                        setCount(count+1)
                    )   
                    }}
                
                >Add</button>
                <button 
                    className="btn btn-warning" 
                    style={{marginLeft: 10}}
                    onClick={()=>{
                        setCount(count-1)
                    }}
                >Remove</button>
            </div>
            <div>
                <LogicTest/>
            </div>
        </>
    );
}




export default HomePage