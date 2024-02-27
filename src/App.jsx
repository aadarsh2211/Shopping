// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './Component/AdminLogin';
import UserLogin from './Component/UserLogin';
import LandingPage from './Component/LandingPage';
import AdminSignUp from './Component/AdminSignUp';
import AdminHomePage from './Component/AdminHomePage';
import Error from './Component/ErrorPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
  <BrowserRouter> {/*it is used to store the browser history path*/}
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/admin' element={<AdminLogin/>} />
        <Route path='/user' element={<UserLogin/>} />
        <Route path='/adminsignup' element={<AdminSignUp/>} />
        <Route path='/adminHomePage/*' element={<AdminHomePage/>} />
        <Route path='/*' element={<Error/>} />
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
