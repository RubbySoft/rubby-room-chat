import React from "react";
import { useNavigate } from "react-router-dom";

const Home=()=>{

    const navigate = useNavigate();
    const handleNavigateToContactMePage =()=>{
        navigate('/HelloWorld');
    }
    return(
        <div>
        <center>
        <h1 >R</h1>
        <h1>U</h1>
        <h1>B</h1>
        <h1>B</h1>
        <h1>Y</h1>
      </center>
    <h1 className='wel'>Hello ! </h1>
    <h3>Welcome To 
      <b> Rubby Room Chat </b>
    </h3>
    <center>
    <div class="card">
        <p class="heading">
            Rubby Room Chat
        </p>
        <p>
            Powered By
        </p>
        <p>RubbySoft
        </p>
        </div>
        
        <button onClick={handleNavigateToContactMePage}>Get Started</button>
        <h1>S</h1>
        <h1>O</h1>
        <h1>F</h1>
        <h1>T</h1>
        </center>
        </div>
    )
}

export default Home;