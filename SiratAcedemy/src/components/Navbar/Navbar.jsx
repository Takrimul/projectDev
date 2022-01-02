import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><h2>Sirat Academy</h2></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/forum">Competition Update</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Courses
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to='/course-details/1' className="dropdown-item">Muhammad ﷺ</Link></li>
                                <li><Link to='/course-details' className="dropdown-item" href="#">Abu Bakar As Siddik</Link></li>
                                <li><Link to='/course-details' className="dropdown-item" href="#">Umar Ibnul Khattab</Link></li>
                                <li><Link to='/course-details' className="dropdown-item" href="#">Uthman Ibn Affan</Link></li>
                            </ul>

                            {/* <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/course-details/1">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><a class="dropdown-item" href="#">Something else </a></li>
          </ul> */}

                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Islamic Site</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a href="http://response-to-anti-islam.com" className="dropdown-item">Response to anti Islam</a></li>
                                    {/* <li><Link to='/blog' className="dropdown-item" href="https://bibijaan.com/">Bibijan</Link></li>
                                    <li><Link to='/blog' className="dropdown-item" href="https://islamask.net/">Islam Ask(Bangladesh)</Link> </li>
                                    <li><Link to='/blog' className="dropdown-item" href="https://islamqa.info/en">Islam QA(Global)</Link> </li>
                                    <li><Link to='/blog' className="dropdown-item" href="https://www.alkawsar.com/bn/">Al Kawsar</Link> </li>
                                    <li><Link to='/blog' className="dropdown-item" href="#">Al Kalam</Link> </li> */}
                                    

                                 </ul>   
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/forum">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/login'>Login/Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
