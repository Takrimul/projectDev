import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
// import { AuthContext } from "../../src/context/AuthProvider/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;