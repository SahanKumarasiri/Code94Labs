import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  var m_names = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );

  var today = new Date();
  var curr_date = today.getDate();
  var curr_month = today.getMonth();
  var curr_year = today.getFullYear();

  today = m_names[curr_month] + " " + curr_date + "/ " + curr_year;

  const refreshPage = () => {
    //function for manually refresh page
    window.location.reload();
  };
  return (
    <>
      <br />
      <div className="topbar ">
        <span className="span">
          <i className="fa fa-phone" aria-hidden="true"></i> 0776135690
        </span>
        <a className="span" href="mailto:kumarasirisahan@gmail.com">
          <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
          kumarasirisahan@gmail.com
        </a>
        <span className="span">
          <i className="fa fa-clock-o" aria-hidden="true"></i> 24/7 Hours
          Working
        </span>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <span className="navbar-brand gradients" title="Code94Labs">
          Code94Labs
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add" className="nav-link">
                Add Recipe
              </NavLink>
            </li>
          </ul>
          <span className="navbar-text">{today}</span>

          <button className="btn btn-primary shadow-none" onClick={refreshPage}>
            <i className="fa fa-refresh" aria-hidden="true"></i> Refresh
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
