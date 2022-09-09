import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { selectUser, logout, login } from "./features/userSlice";
import Login from './components/Login/Login';

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="app">
        <Header />

        {/* {!user ? (
        <Login  />
      ) : (
        <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      )} */}
              <div className="app__body">
        <Sidebar />
        <Feed />
        {/* <Widgets /> */}
      </div>
    </div>
  );
}

export default App;
