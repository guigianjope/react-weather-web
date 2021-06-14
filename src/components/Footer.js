import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
                <p>
                    &copy;{new Date().getFullYear()} Weather Web | by GUILHERME GIANJOPE | Terms Of Service | Privacy
                </p>
        </div>
    )
}

export default Footer;