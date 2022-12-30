import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login1 from '../pages/login/login1/Login1';
import Login2 from '../pages/login/login2/Login2';
import LoginList from '../pages/login/LoginList';
import RegisterList from '../pages/register/RegisterList';
import Register1 from '../pages/register/register1/Register1';
import Register2 from '../pages/register/register2/Register2';

export default function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={ <Home /> } />
        <Route path='login'>
          <Route index element={ <LoginList /> } />
          <Route path='login1' element={ <Login1 /> } />
          <Route path='login2' element={ <Login2 /> } />
        </Route>
        <Route path='register'>
          <Route index element={ <RegisterList /> } />
          <Route path='register1' element={ <Register1 /> } />
          <Route path='register2' element={ <Register2 /> } />
        </Route>
      </Route>
    </Routes>
  );
}
