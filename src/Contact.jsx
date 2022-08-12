import React from "react";
import {NavLink} from 'react-router-dom';
function Contact()
{
    return(<>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div style={{color:" rgb(176, 176, 176)"}} class = "navbar-brand">Project</div>
        <div  class="container-fluid d-flex justify-content-center ">
          
        <ul class="navbar-nav ">
            <li class="nav-item p-1">
              <NavLink class="nav-link" to="/">HOME</NavLink>
            </li>
            <li class="nav-item  p-1">
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
      
      <h2 className="mt-2 text-center text-capitalize text-danger">CONTACT uS </h2>
      <div className="container">
      <form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">FullName</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Name"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Phone</label>
    <div class="col-sm-8">
      <input type="tel" class="form-control" id="inputPassword3" placeholder="Mobile Number"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-8">
      <input type="email" class="form-control" id="inputPassword3" placeholder="email"/>
    </div>
  </div>
  <div class="input-group">
  <div class="input-group">
    <label for ="input-group-text">With textarea</label>
  </div>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
  
  
  <div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
      </div>
    </>)
}
export default Contact