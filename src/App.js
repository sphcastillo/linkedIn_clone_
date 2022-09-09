import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widgets/Widgets';
import { selectUser } from './features/userSlice';
import { auth } from './base';
import { login, logout } from './features/userSlice';
import Login from "./components/Login/Login";

function App() {
    // Pull user from the data store
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        // user is logged in
        dispatch(
          login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []); 
  //just want it to run once


  return (
    <div className="app">
        <Header />

        {!user ? (
          <Login /> 
      ) : (
        <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      )}

    </div>
  );
}

export default App;
