import { Navigate } from "react-router-dom";  
import './AdminPage.css'

const AdminPage = (props) =>{

    const isAdmin = props.isAuth;
    console.log(isAdmin);

    if(isAdmin === false){ 
        return (
            <>
                <div className="errorContainer">
                    <h2>unauthorized 504</h2>
                </div>
            </>
        )  
    }else if(isAdmin === true){
        console.log("check");
        return(
            <>
                <div>
                    <h3>Admin Pages</h3>
                </div>
                <div>
                    <p>For admin only</p>
                </div>
            </>
        );
    }else{
        return( 
            <>
                <Navigate
                to="/"
                replace={true}
                />
            </>
        )
    }
}

export default AdminPage;