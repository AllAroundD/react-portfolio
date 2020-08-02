import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./style.css";

// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

let showTimeout
let prevLocation;

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarTop(props) {

  // const [collapsed, setCollapsed] = useState(true);

  // const toggleNavbar = () => setCollapsed(!collapsed);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  if (showMenu) {
    // hide the nav after 10s
    clearTimeout(showTimeout);
    showTimeout = setTimeout(function () { setShowMenu(false); }, 2000);
  }

  // if we change locations, hide menu immediately
  if (prevLocation !== location.pathname) {
    console.log(`**** > location changed, hiding menu`)
    clearTimeout(showTimeout);
    showTimeout = setTimeout(function () { setShowMenu(false); }, 100);
    // setShowMenu( false );
    prevLocation = location.pathname;
  }



  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
      {/* <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Doug Moore</NavLink>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/about"
                className={window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
                }
              >
                About
            </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className={window.location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
                }>
                Portfolio
            </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
                }>
                Contact
            </NavLink>
            </li>
          </ul>
        </div>
      </nav> */}
      {/* 
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Doug Moore</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar> */}


      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Doug Moore</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>

            </ul>
          </div>
        </div>
      </nav> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">
          Doug Moore
        </NavLink>
        {/* <a class="navbar-brand" href="#" onClick={ function(){ props.changePage('AboutPage')} }>Pupster</a> */}
        <button onClick={() => setShowMenu(!showMenu)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ` + (showMenu ? 'show' : '')} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
            </li>
          </ul></div></nav>

    </div>
  );
}

export default NavbarTop;
