import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Image from '../../Images/logo.jpg';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <div>
                <Container>
                    <nav className="nav-bar">
                        <div className="logo">
                            <h1>EDU<span>GLOBAL</span></h1>
                        </div>
                        <div className="nav-item">
                            <nav>
                                <NavLink to='/home' className='item' activeStyle={{
                                    fontWeight: "bold",
                                    color: "#ffbc09"
                                }}
                                >Home</NavLink>

                                <NavLink to='/Services' className='item' activeStyle={{
                                    fontWeight: "bold",
                                    color: "#ffbc09"
                                }}
                                >Services</NavLink>

                                <NavLink to='/About' className='item' activeStyle={{
                                    fontWeight: "bold",
                                    color: "#ffbc09"
                                }}
                                >About Us</NavLink>

                                <NavLink to='/Signup' className='item' activeStyle={{
                                    fontWeight: "bold",
                                    color: "#ffbc09"
                                }}
                                >Signup</NavLink>
                            </nav>
                        </div>
                    </nav>
                </Container>
            </div>
        </div>
    );
};

export default Header;