import React from "react";
import abclogo from "../Assets/abclogo.svg";
import hrclogo from "../Assets/hrclogo.svg";
import '../App.css';

const Header = () => {
    return (
      <header>
        
         <div >
          <img className="abclogo" src={abclogo} alt="abclogo" style={{ float: 'left',marginTop: '30px',marginLeft: '20px'}}/>
          <img className="hrclogo" src={hrclogo} alt="abclogo" style={{ float: 'center',marginRight:'226px',marginTop: '30px' }} />
         </div>
         <h1> Invoice List</h1>
        
      </header>
    );
  }
  
  export default Header;