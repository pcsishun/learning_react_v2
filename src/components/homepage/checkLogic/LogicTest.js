const LogicTest = () => {
    const logicChecking = 2;
    
    if(logicChecking <= 1){
        console.log(logicChecking);
        return(
            <>
                <div>
                    <h2>Below or equal than 1</h2>
                </div>
                <div>
                    {logicChecking}
                </div>
            </>
        );
    }else{
        console.log(logicChecking);
        return(
            <>
                <div>
                    <h2>above than 1</h2>
                </div>
                <div>
                    {logicChecking}
                </div>    
            </>
        );
    }
}

export default LogicTest;