import React, { useState } from 'react';

function Navigation(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/" onClick={() => window.location.reload()}>{props.title}</a>
                </div>

                <button className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <li><a href="/about">{'// About'}</a></li>
                    <li><a href="/projects">{'// Projects'}</a></li>
                    <li><a href="/contact">{'// Contact'}</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;