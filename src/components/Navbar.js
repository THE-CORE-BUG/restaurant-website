import React,{ useState,useEffect } from "react";
import "../styles/navbar.css";
import logo from "../images/kisspng-catering-food-computer-icons-logo-event-management-catering-5abf487cd18447.7546290415224853728582.png";
function Navbar() {
  
  const [navbar,setNavbar] = useState(false)
  
  const changeBackground = () => {
    if(windows.scrollY >= 100)
    {
      setNavbar(true)
    }
    else
    {
      setNavbar(false)
    }
  }
  
  windows.addEventListener('scroll',changeBackground);
  
  return (
    <header className={navbar? 'navbar active': 'navbar'} >
      <div className="logo">
        <img src={logo} alt="" srcset="" />
        <div>Desi Cafe</div>
      </div>
      <ul className="nav-ul">
        <li className="nav-items">
          <a href="/"> Home</a>
        </li>
        <li className="nav-items">
          <a href="/">Menu</a>
        </li>
        <li className="nav-items">
          <a href="/">About</a>
        </li>
        <li className="nav-items">
          <a href="/">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
