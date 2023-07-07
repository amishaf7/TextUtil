import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=> {
    setAlert(null);
    }, 3000);
  }
  const toggleMode=()=>{
   if(mode==="light"){
    setMode("dark");
    document.body.style.background="white";
    showAlert("dark mode has been enabled","success");
   }
   else{
    setMode("light");
    document.body.style.background="dark";
    showAlert("light mode has been enabled","success");
   }
   }
  
  return (
    <>
   {/* <Router> */}
   <Navbar title="TextUtils1" aboutText="about" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className='container my-3' mode={mode}>
   {/* <Routes>
          <Route exact path="/about"
            element={<About />}>
          </Route>
          
          <Route exact path="/"
          element={<TextForm showAlert={showAlert} heading="Enter the text"  mode={mode}/>}>
          </Route>
          
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text"  mode={mode}/>
        </div>
        {/* </Router> */}
   
   
    </>
  );
  }

export default App;
