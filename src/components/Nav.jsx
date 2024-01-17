import React from 'react';
import { Link } from 'react-router-dom';
import "./Global.css"; 
const Nav = () => {
  return (
    <nav>
      <div className='logoblock'> 
        <img className="roll-in-left" src="https://www.shutterstock.com/shutterstock/photos/1290022027/display_1500/stock-vector-shop-logo-good-shop-logo-1290022027.jpg" alt="" />
      </div>
      <div className='menublock'>
        <ol>
          <li>
            <Link to={"/product"}>Product</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ol>
      </div>
    </nav>
  );
}

export default Nav;
