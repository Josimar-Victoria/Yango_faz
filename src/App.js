import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Sidebar } from './Components/Sidebar';
import './Styles/App.css';
import {useStateValue} from './StateProvide'
import { Login } from './Components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { actionsTypes } from './reducer';

function App() {
  const [{isopen, user}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        dispatch({
          type: actionsTypes.SET_USER,
          user:user,
        })
      }
    })
    console.log(user);
  },[]);

  return (
    <div className="app">
      <Header/>
      {
        !user ?( <Login/>) :(
        <div className={`app__center ${isopen ? "displayed" : ""}`}>
            <Sidebar/>
            <Main/>
        </div> 
        )
      }
    </div>
  );
}

export default App;
