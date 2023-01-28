import React from 'react'
import { Link } from "react-router-dom";

import './css/Navbar.css' 

function Navbar() {

        const body = document.body;
        let lastScroll = 0;
        console.log('lol'+body);

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                body.classList.remove("scroll-up");
                return;
            }

            if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
            } else if (
                currentScroll < lastScroll &&
                body.classList.contains("scroll-down")
            ) {
                body.classList.remove("scroll-down");
                body.classList.add("scroll-up");
            }
            lastScroll = currentScroll;
        });


  return (
    <header>
        <div className="navbar-container">
            <Link to={'/'}>
                <h2>SOHAIB</h2>
            </Link>
            <ul>
                <Link to={'/about'}><li>ABOUT</li></Link>
                <Link to={'/work'}><li>WORK</li></Link>
                <Link to={'/resume'} target="_blank"><li className='resume'>Résumé</li></Link>
            </ul>
        </div>
    </header>

    
  )
}

export default Navbar