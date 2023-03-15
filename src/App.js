import './App.css';
import React from 'react'
import NavBar from './Components/Navbar';
import TextBox from './Components/TextBox';


function App() {
  return (
    <div>
      <NavBar title = "Text Converter"/>
      <TextBox heading="Text Converter"/>
    </div>

 
  );
}
export default App;