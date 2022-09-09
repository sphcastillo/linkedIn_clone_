import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../base';
import { login } from '../../features/userSlice';
import "./Login.css";

function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const dispatch = useDispatch();


    const loginToApp = (e) => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                })
            );
        } 
        ).catch((error) => alert(error));
    };

    const register = () => {

        if(!name){
            return alert("Please enter a full name!");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoUrl: profilePicture,
            })
            .then(() => {
                // push user into the redux store
                // dispatch a login action
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePicture
                }));

            });
        }).catch(error => alert("Something is wrong",error));
    };

    return (
        <div className="login">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" 
                alt="LinkedIn logo" 
            />
            <form>
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    placeholder="Full Name(required if registering)" 
                />
                <input 
                    type="text" 
                    value={profilePicture}
                    onChange={(e) => setProfilePicture(e.target.value)}
                    placeholder="Profile picture URL(optional)"
                />
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    placeholder="Email"
                />
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Password"
                />
                <button
                    onClick={loginToApp}
                >Sign In</button>
            </form>
            
            <p>Not a member? {" "}
                <span 
                    className="login__register" 
                    onClick={register}
                >
                Register Here
                </span>
            </p>
        </div>
    )
}

export default Login;