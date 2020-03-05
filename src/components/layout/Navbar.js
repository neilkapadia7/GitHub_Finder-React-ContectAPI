import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';


const Navbar = ({title}) => {
    
        return (
            <nav className="navbar">
                <h1><i className="fab fa-github"></i>  {title}</h1>

                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        );

}

Navbar.defaultProps = {
    title : 'Github Finder'
}

export default Navbar
