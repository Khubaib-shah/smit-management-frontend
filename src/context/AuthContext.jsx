
import { createContext, useState, useEffect } from "react";
import { EmailAuthCredential, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utiltes/firbase";


export const AuthContext = createContext();


function AuthContextProvider({ children }){
    const [user, setUser] = useState({
        isLogin : false,
        userInfo : {},
    })

    const [loading, setLoading] = useState(true)

//  Handle user state changes/
 function onAuthChanged(user) {
    if(user){
        console.log("user=>", user);
        
        setUser({isLogin : true , userInfo: {
            name : user?.displayName,
            photoURl : user?.photoURL,
            email : user?.email
        }})
    }else{
        setUser({isLogin:false, userInfo:{}})
    }
    setLoading(false);
  }

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth,onAuthChanged);
        return subscriber; // unsubscribe on unmount
      }, []);

    return(
        <AuthContext.Provider value={ { user, setUser }}>
            {
                loading ? (
                    <div className="w-full h-96 flex justify-center items-center ">
                        <h1 className="text-2xl">Loading ...</h1>
                    </div>
                ):(
                    children
                )
            }
        </AuthContext.Provider>
    )
};


export default AuthContextProvider;