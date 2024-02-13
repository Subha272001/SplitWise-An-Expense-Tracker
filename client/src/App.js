

import SignUpPage from './Components/SignUp/SignUpPage';
import WelcomePage from './Components/WelcomePage';
import LoginPage from './Components/login/LoginPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DataProvider from './context/DataProvider';
import HomePage from './Components/home/HomePage';
import Friend from './Components/home/sidebar/friend/Friend';


function App() {
  return (
    <DataProvider>
    <BrowserRouter>
       <Routes>
            <Route path='/' element={<WelcomePage/>} />
            <Route path='/signup' element={ <SignUpPage/>} />
            <Route path='/login' element={ <LoginPage/>}/>
            <Route path='/home' element= { <HomePage /> }/>
      </Routes>
    </BrowserRouter>
    </DataProvider>
    // <Friend/>
  )
}

export default App;
