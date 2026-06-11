import React from 'react';

function Navigation(props) {
    return (
        <nav className='navbar'>
            <div className="logo"><a href="/" onClick={() => window.location.reload()}>{props.title}</a></div>
            <ul className="nav-links">
                <li><a href="#about">// About</a></li>
                <li><a href="#projects">// Projects</a></li>
                <li><a href="#contact">// Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;