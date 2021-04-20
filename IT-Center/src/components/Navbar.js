import React, { Component } from 'react'
import logo from '../images/Logo.png'
import pcc from '../images/CBS_ME.png'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'


class Navbar extends Component {
  state = { isOpen: false }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="https://www.pcconline.org" >
              <img src={pcc} style={{ height: "100px" }}
                alt="PCC online" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/trainings">Trainings</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>

            </li>
          </ul>
          <div className="nav-header">
            <Link to="/" >
              <img src={logo} style={{ height: "100px" }}
                alt="IT-Center" />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}


export default Navbar;