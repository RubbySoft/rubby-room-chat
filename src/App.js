import React from 'react';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Hello from './components/Hello';
import Footer from './components/Footer';

function App() {
  return (
    <div class="container">
          <Navbar/>
     <BrowserRouter>
      <Routes>
    
        <Route index element={<Home />} />
        <Route path="/HelloWorld" element={<Hello />}>
       </Route>
        </Routes>
    </BrowserRouter>
    <Footer/>
  </div>    
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);