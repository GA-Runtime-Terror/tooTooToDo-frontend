import './App.css';
import TodoList from './components/TodoList';
import { Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {
  return (
      <Routes>
        <Route path={'/sign-in'} element={<SignIn />} />
        <Route path={'/sign-up'} element={<SignUp />} />
        <Route path={'/'} element={<TodoList />} />
      </Routes>
  );
}

export default App;
