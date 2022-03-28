const LogicLearn = () =>{
    const alphabet = "f";

    if(alphabet !== "a" && alphabet !== "b" && alphabet !=="c" && alphabet !=="d" && alphabet !=="f"){
        return(
            <>
                <div>
                    <h1>
                        Grade Alphabet invalid
                    </h1>
                </div>
            </>
        )
    }else{
        if (alphabet === "a"){
            return(
                <>
                    <div>
                        <h1>
                            {alphabet} Very Good Great
                        </h1>
                    </div>
                </>
            );
        }else if (alphabet === "b"){
            return(
                <>
                    <div>
                        <h1>
                            {alphabet} Ok Grade
                        </h1>
                    </div>
                </>
    
            );
    
        }else if(alphabet === "c"){
            return(
                <>
                    <div>
                        <h1>
                            {alphabet} Bad Grade
                        </h1>
                    </div>
                </>
    
            );
    
        }else{
            return(
                <div>
                    <h1>
                        {alphabet} Fucking noob
                    </h1>
                </div>
            );
    
        }

    }

    

}

export default LogicLearn;