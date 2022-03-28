import {useState, useEffect} from 'react';

 

const MikePage = () => {

    const [count, setCount] = useState(10);
    const [isError, setIsError] = useState(false);
    const [isNumber, setIsNumber] = useState(0);
    const [isHighNumber, setIsHighNumber] = useState("less_than_5");

    useEffect(()=>{
        if (count < 0){
            setCount(0)
            setIsError(true)
        }else if(count > 0){
            setIsError(false)
        }
    });

    useEffect(()=>{
        if (count === 5){
            setIsHighNumber("is_5")
        }else if(count > 10){
            setIsHighNumber("more_than_10")
        }
    });


    const isCounting = () => {
        setCount(count + 1)
        setIsNumber(isNumber + 1)
    }

    const downCounting = () => {
        setCount(count - 1)
    }

    console.log("useState==> ",isNumber);

    return(
        <div>
            <h1>
                YakYedHeeeeeeeeeeeee
            </h1>
            <div>
                <div className="title">
                    <h3>Counting</h3>
                </div>
                <div>{isError === true && <h5>can't below than 0</h5>}</div>
                <h3>
                    {count}
                </h3>
                <button 
                    className='btn btn-primary'
                    onClick={isCounting}
                >
                    PLUSE
                </button>
                <button className='btn btn-warning' onClick={downCounting}>
                    Minus
                </button>
            </div>
            <hr/>
            <div>
                <div>
                    <div>
                        <h3>High number test</h3>
                    </div>
                </div>
                <div>
                    {isHighNumber === "is_5" && <h4>Half Way</h4>}
                    {isHighNumber === "more_than_10" && <h4>Can not go more than 10</h4>}
                </div>
                <div>
        
                </div>
            </div> 
        
        </div>

    );
}

export default MikePage;