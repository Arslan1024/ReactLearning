import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
//import TextForm from './components/TextForm';
import About from './components/About';


function App() {

  return (
    <>
    <Navbar title="HomePage" aboutText="About the Details" />
    <div className="container my-3">
    {/* <TextForm heading="Enter the Text to analyze below"/> */}
    <About />
    </div>

    </>
  );
}

export default App;
