import './App.css';
import { Route, Routes } from 'react-router-dom'
import TodoList from './components/TodoList';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Landing from './components/Landing';
import LoggedIn from './components/LoggedIn';
import {useState} from 'react'




function App() {
 
  const [loggedInUser, setLoggedInUser] = useState ({})

 const handleLogin = (data) => {
   setLoggedInUser(data)
 }


 

  return (

    <div>
      <Routes>  
        {/* <Route exact path={'/'} render={() => <Landing />} /> */}

        <Route exact path={'/'} element={<Landing />} />
        <Route exact path={'/to-do'} element={<TodoList />} />
        <Route exact path={'/sign-in'} element={<SignIn handleLogin={handleLogin}/>} />
        <Route exact path={'/sign-up'} element={<SignUp handleLogin={handleLogin}  />} />
        <Route exact path={'/logged-in'} element={<LoggedIn user={loggedInUser} />} />

        
        
      </Routes>


      

  </div>
  );
}

export default App;
