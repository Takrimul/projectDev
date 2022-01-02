import React from 'react';
// import { Container } from '@material-ui/core';
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import googleIcon from '../../data/images/google.svg';

const GoogleSignIn = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, img: photoURL }
               
                // setLoggedInUser(signedInUser)
                // history.replace(from);
            }).catch((error) => {
                alert("sorry you have facing trouble!")
            });
    }
    return (

        <button
            onClick={handleGoogle}
            type="button"
            className="btn btn-primary"
        >
            <i className="fab fa-google"></i>&nbsp;Sign in with Google
        </button>

    )
}

export default GoogleSignIn
