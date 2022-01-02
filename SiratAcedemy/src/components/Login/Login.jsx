import React from 'react';
import Navbar from '../Navbar/Navbar'
import FacebookSign from './FacebookSign';
import GoogleSignIn from './GoogleSignIn';
import background from '../../data/images/loginback.jpg'
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <>
            <Navbar />
            <div style={{backgroundImage: `url(${background})`}}>
            <div className="container login-body">
                <h2>Welcome </h2>
                <p>Welcome to one of the finest online institution for authentic knowledge of life value and fundamental
                    concepts of Islam. Register to introduce yourself with the ocean of knowledge and endless possibilities.</p>
            </div>
            <div className="container mt-5">
                <form className="form-horizontal">
                    <div className="form-group"> <label className="control-label col-sm-2" htmlFor="email">User Name</label>
                        <div className="col-sm-10"> <input type="email" className="form-control" id="email" placeholder="Enter email" /> </div>
                    </div>
                    <div className="form-group"> <label className="control-label col-sm-2" htmlFor="pwd">Password</label>
                        <div className="col-sm-10"> <input type="password" className="form-control" id="pwd" placeholder="Enter password" /> </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <div className="checkbox"> <label><input type="checkbox" /> Remember me</label> </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10"> <button type="submit" className="btn btn-primary">Log in</button> </div>
                    </div>
                    <div className="forgotpassword"><a href="#">Forgot Password?</a><br/></div>

                    <div className="signup">Don't have an account?<Link to='/registration'> Register Now</Link></div>
                </form>
            </div>

            <div className='container mt-2 p-3'>
                <GoogleSignIn/> <br />
                <FacebookSign/>
            </div>
            
            </div>

        </>
    )
}

export default Login
