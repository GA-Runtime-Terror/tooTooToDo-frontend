import './App.css';
import { Route, Routes } from 'react-router-dom'
import TodoList from './components/TodoList';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Landing from './components/Landing';
import {Link} from 'react-router-dom';



function App() {
 
  return (

    <div>
      <Routes>  
        {/* <Route exact path={'/'} render={() => <Landing />} /> */}

        <Route exact path={'/'} element={<Landing />} />
        <Route exact path={'/to-do'} element={<TodoList />} />
        <Route exact path={'/sign-in'} element={<SignIn />} />
        <Route exact path={'/sign-up'} element={<SignUp />} />

        
        
      </Routes>



  </div>
  );
}

export default App;
