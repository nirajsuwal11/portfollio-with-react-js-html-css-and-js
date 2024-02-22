import React from "react"
import './navbar.css'


function Navbar(){
    return(
    <>
    <header className="header">
        <a href="#" className="logo"> <span className="clrlogo"> DIGITAL </span> TECH </a>
        <input type="checkbox" id="check"/>
        <label for="check" className="icons"> <i className='bx bx-menu' id="menu-icon"></i>
        <i class='bx bx-x' id="close-icon"></i></label>

   

        <nav className="navbar">
            <a href="#"> Home </a>
            <a href="#"> About  </a>
            <a href="#"> Gallery </a>
            <a href="#"> Services </a>
            <a href="#"> Contact </a>
    
    
        </nav>
    
    </header>
 
    </>
     
    )
    }
    export default Navbar
    