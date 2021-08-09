import { useDispatch, useSelector } from "react-redux";
import firebase from "../firebaseConfig"
import { signedIn, signIn } from "../redux/action";
import { useHistory } from "react-router-dom";


export default function SignInPage() {

    let history = useHistory();
    const auth = firebase.auth();

    const dispatch = useDispatch();

    const state = useSelector(state => state);

    function writeUserData(userId, name, email, imageUrl) {
        firebase.database().ref('users/' + userId).set({
          username: name,
          email: email,
          profile_picture : imageUrl
          
        });
    }




    const signInPlz = async () => {
        
        const provider = new firebase.auth.GoogleAuthProvider();
        dispatch(signIn())
        
        try {
            const result = await auth.signInWithPopup(provider)
            const user = result.user;
            let {email,displayName,photoURL} = user
            let disableButton = false;
            let userId = email.replaceAll(".","")
            writeUserData(email.replaceAll(".",""),displayName,email,photoURL)
            
            
            dispatch(signedIn({
                email,
                displayName,
                photoURL,
                disableButton,
                userId

            }))
           
        } catch (e) {

            console.log("error",e.message)
        }
        history.push({
            pathname: "/WaitingRoom"
        })


    }

    return (
        <div className="sign-in-container">
            <h1>Sign in </h1>
            <button disabled={state.disableButton} onClick={signInPlz}>Sign In With Google</button>
            

        </div>
    )

}

/// steps