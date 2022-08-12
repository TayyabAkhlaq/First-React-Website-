import React from 'react';
import img1 from './images/ca.png';
import './index.css';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div style={{ color: " rgb(176, 176, 176)" }} class="navbar-brand">Project</div>
                <div class="container-fluid d-flex justify-content-center ">

                    <ul class="navbar-nav ">
                        <li class="nav-item p-1">
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

            <div className="container m-5 ">
                <div className='row '>
                    <div className='col-md-5  m-5 p-5 mx-auto ' >
                    <h2 style={{display:"flex",justifyContent:"center", alignItem:"center"}}></h2>
                    <h3 style={{display:"flex",justifyContent:"center", alignItem:"center" , color:"aqua"}}></h3>
                    <h6 style={{display:"flex",justifyContent:"center", alignItem:"center",fontFamily:"Lucida Console"}}></h6>
                    </div>
                    <div className='col-md-5  m-4 p-5 mx-auto header-img'>
                    <div className='imag'>
                    <img style={{height:"150px" , width:"150px"}} src={img1} alt="admin photo" />
                    </div>
                    </div>
                </div>
                

            </div>
        </>
    )
}

export default Home;
