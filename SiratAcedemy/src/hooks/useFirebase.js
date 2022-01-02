// import initializeAuthentication from "../Componrnts/Shared/Firebase/firebase.init";
import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  
} from "firebase/auth";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";



// initialize firebase app
initializeAuthentication();

const useFirebase = () => {


    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    const registerUser = (email, password) => {
        
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

  // observer user state
//   useEffect(() => {
//     const unsubscribed = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser({});
//       }
//       setIsLoading(false);
//     });
//     return () => unsubscribed;
//   }, [auth]);

//   useEffect(() => {
//     if (user.email !== undefined) {
//       fetch(`http://localhost:5000/user/${user.email}`)
//         .then((res) => res.json())
//         .then((data) => console.log(data))
//         .catch((err) => console.log("User Error", err));
//       console.log("fetching user");
//     } else {
//       console.log(user.email, "hello ");
//     }
//   }, [user.email]);

//   const saveUser = (email, displayName, method) => {
//     const user = { email, displayName };
//     fetch("http://localhost:5000/users", {
//       method: method,
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(user),
//     }).then();
//   };

  return {
    user,
    isLoading,
    authError,
    registerUser,
  };
};

export default useFirebase;