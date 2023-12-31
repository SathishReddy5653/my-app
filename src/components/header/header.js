import React from "react";
import "./header.css";
import logo from "../../images/datasouk.jpeg";
import { Nav } from "react-bootstrap";
import cart from "../../images/shopping-cart.png";
import notification from "../../images/bell.png";
import { NavDropdown } from "react-bootstrap";
import whislist from "../../images/love.png";
import profile from "../../images/profile.png";
import { useCart } from "../global-component/global";

import { Link } from "react-router-dom";


const TopSection = () => {
  const { cartCount ,searchInput,handleInputChange} = useCart();
  
  return (
    <Nav variant="pills" defaultActiveKey="/home" className=" bg-container">
      <div className="d-flex flex-row justify-content-start nav-container">
        <Nav.Item className="nav-item">
          <img src={logo} alt="logo" className="logo" />
        </Nav.Item>
       
        <Nav.Item className="nav-item">
        <Link to="/home">
          <button className="home">Home</button>
         </Link>
        </Nav.Item>
        

        <Nav.Item>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="My Work"
            menuVariant="dark"
            className="dropdown"
          >
            <NavDropdown.Item href="#action/3.1">
              My Collection
            </NavDropdown.Item>

            <NavDropdown.Item href="#action/3.3">My Nodes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">My Work</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">My Jobs</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">My Teams</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item className="nav-item">
         

        <Link to="/search">
          <input
            type="search"
            className="search-bar"
            placeholder="Search Something..."
            value={searchInput}
            onChange={handleInputChange}
             />
</Link>
    
        </Nav.Item>
        <Nav.Item className="nav-item">
        <Link to="/cart">
          <img src={cart} alt="cart" height="45px" width="45px" />
          <span className="cart-count">{cartCount}</span>
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <img src={whislist} alt="cart" height="45px" width="45px" />
        </Nav.Item>

        <Nav.Item className="nav-item">
          <img src={notification} alt="cart" height="45px" width="45px" />
        </Nav.Item>
        <Nav.Item className="nav-item">
          <img src={profile} alt="cart" height="45px" width="45px" />
        </Nav.Item>
      </div>
    </Nav>
    
      

  );

};
export default TopSection;
