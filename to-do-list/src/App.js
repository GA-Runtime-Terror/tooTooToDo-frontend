import './App.css';
import { Route, Routes } from 'react-router-dom'
import TodoList from './components/TodoList';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Landing from './components/Landing';
import LoggedIn from './components/LoggedIn';



function App() {
 
  return (

    <div>
      <Routes>  
        {/* <Route exact path={'/'} render={() => <Landing />} /> */}

        <Route exact path={'/'} element={<Landing />} />
        <Route exact path={'/to-do'} element={<TodoList />} />
        <Route exact path={'/sign-in'} element={<SignIn />} />
        <Route exact path={'/sign-up'} element={<SignUp />} />
        <Route exact path={'/logged-in'} element={<LoggedIn />} />

        
        
      </Routes>



  </div>
  );
}

export default App;
