import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';



function App() {

  const [mode, setMode] = useState('dark');

  const [alert, setalert] = useState(null);

  const showAlert = (message , type ) =>{
      setalert({
        msg : message,
        type: type
      })
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled" , 'success');
    }
    else {
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , 'success');
        }
    
  }

  return (
    <>
    <Navbar title="HomePage" mode={mode}  toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode}/>
    {/* <About /> */}
    </div>
    </>
  );
}

export default App;
