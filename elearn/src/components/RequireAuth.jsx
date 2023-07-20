import { Navigate } from "react-router-dom";

const RequireAuth = ({children,redirectTo}) =>{
    // const {userData} = useContext(AppContext);
    // console.log(userData)
  const userData = sessionStorage.getItem("userData");
    return userData ? children : <Navigate to={redirectTo} />;
}

export default RequireAuth;