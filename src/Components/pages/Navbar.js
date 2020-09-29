import React, { useEffect, useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../App.css";
import { Button } from "../Button";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setbutton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setbutton(false);
    } else {
      setbutton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="#home" className="navbar-logo" onClick={closeMobileMenu}>
            <img src='images/Better Body Online coaching.svg' className="navbar-icon" alt='' width='70%' height='90%' />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="#home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#voeding" className="nav-links" onClick={closeMobileMenu}>
                Voedingsadvies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#schema" className="nav-links" onClick={closeMobileMenu}>
                Trainingsschemas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#prijs" className="nav-links" onClick={closeMobileMenu}>
                Prijs
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="#footer" className="btn-link">
                  <Button buttonStyle="btn--outline" onClick={closeMobileMenu}>Aanmelden</Button>
                </Link>
              ) : (
                <Link to="#footer" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile" onClick={closeMobileMenu}>
                    Aanmelden
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
