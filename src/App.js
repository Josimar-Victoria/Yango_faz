import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Sidebar } from './Components/Sidebar';
import './Styles/App.css';
import {useStateValue} from './StateProvide'
import { Login } from './Components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { actionsTypes } from './reducer';
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';

function App() {
  const [{isopen, user, darkMode}, dispatch] = useStateValue()

  const theme = unstable_createMuiStrictModeTheme({
    palette:{
      type: darkMode ? 'dark' : 'light',
    }
  })

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
      {
        !user ?(
          <>
            <Header/>
            <Login/>
          </>
          ):(
        <>
          <ThemeProvider theme={theme}>
          <CssBaseline/>
            <Header/>
              <div className={`app__center ${isopen ? "displayed" : ""}`}>
                  <Sidebar/>
                  <Main/>
              </div> 
          </ThemeProvider>
        </>
        )
      }
    </div>
  );
}

export default App;
