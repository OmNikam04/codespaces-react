import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './firebase';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
    const [email, setEmail] = useState("")
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              setEmail(user.email)
              // ...
              console.log("uid", email)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
    return(
        <>
            <nav>
                <p>
                    Welcome Home
                    
                </p>
                <div>
                    { email && <p>{email}</p>}
                </div>
                <Link to={"/login"}>Login</Link>
                <br />
                <Link to={"/signup"}>Register</Link>
                <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
            </nav>
        </>
    )
}
 
export default Home
