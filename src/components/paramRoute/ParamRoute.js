import { useParams } from "react-router-dom";

const ParamRoute = () => {
    const {name} = useParams();
    return(
        <>
            <div>
                <h3>random uri</h3>
            </div>
            <div>
                <h6>Your uri is {name}</h6>
            </div>
        </>
    );    
}

export default ParamRoute;


