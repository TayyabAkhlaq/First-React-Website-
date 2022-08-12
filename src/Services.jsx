import React from "react";
import Cards from './Cards';
import Sdata from "./Sdata";
import { NavLink } from "react-router-dom";
function Services() {
  return (<>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div style={{ color: " rgb(176, 176, 176)" }} class="navbar-brand">Project</div>
      <div class="container-fluid d-flex justify-content-center ">

        <ul class="navbar-nav ">
          <li class="nav-item p-1 ">
            <NavLink class="nav-link" to="/">HOME</NavLink>
          </li>
          <li class="nav-item p-1">
            <NavLink class="nav-link" to="/about">ABOUT</NavLink>
          </li>
          <li class="nav-item p-1">
            <NavLink class="nav-link" to="/services">SERVICES</NavLink>
          </li>
          <li class="nav-item p-1">
            <NavLink class="nav-link" to="/contact">CONTACT US</NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <div className="main ">
    <h1 className="text-center">Our Services</h1>
    <div className="container ">
      <div className="row">
       
          {Sdata.map((index) => {
            return <Cards value={index.imgsrc} value1={index.title} />
          })}
      
      </div>
    </div>
    </div>

  </>
  )
}
export default Services