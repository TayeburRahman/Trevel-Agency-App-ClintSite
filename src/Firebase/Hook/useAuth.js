import { useContext } from "react"
import { AuthContext } from "../../Context/AuthProvider";
  


const useAuth = () =>{
    return useContext(AuthContext);
    // console.log(useContext)
};
export default useAuth;