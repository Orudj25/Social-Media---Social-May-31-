import React from 'react';
import './Register-style.css'

const Register = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className='loginLogo'>Social May 31</h3>
                    <span className="loginDesc">
                        Connect with your friends and the world around you on "Social May 31"
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input className="loginInput" placeholder="Username"/>
                        <input className="loginInput" placeholder="Email"/>
                        <input className="loginInput" placeholder="Password"/>
                        <input className="loginInput" placeholder="Password again"/>
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">
                            Log into Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;