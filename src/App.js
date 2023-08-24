import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import DrawerAppBar from './common/header';
import LoginPage from './components/loginPage';
import HomePage from './components/homepage';
import React from 'react';
function App() {
  return (
    <>
    <div className="App">
    <DrawerAppBar/>
       <BrowserRouter>
       
   <Routes>
  <Route path="/loginpage" element={<LoginPage/>} />
  <Route path="/homepage" element={<HomePage/>} />

  </Routes>
 
  </BrowserRouter>
  
  
    </div>
    </>
);
}

export default App;
