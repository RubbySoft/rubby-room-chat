import React from "react";
import { useNavigate } from "react-router-dom";
import Type from "./Type";

const Home=()=>{
 //   alert("Dear User, Thank you for visiting Rubby Room Chat. Please note that this application is currently in its development phase. As a result, some chat and backend functionalities are still under development and may not be fully operational. We appreciate your understanding and patience as we work diligently to enhance your experience. If you encounter any issues or have suggestions, please feel free to reach out to us. Thank you for your support! Best regards, The Rubby Room Chat Team");
    const navigate = useNavigate();
    const handleNavigateToContactMePage =()=>{
        navigate('/ChatStartPage');
    }
    return(
        <div>
        <center>
        <h1>R</h1>
        <h1>U</h1>
        <h1>B</h1>
        <h1>B</h1>
        <h1>Y</h1>
      </center>
    <h1 className='wel'>Hello ! </h1>
    <h3>Welcome To <b><Type/></b>
    </h3>
    <center>
        <div className="divType">
                 
    </div>
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