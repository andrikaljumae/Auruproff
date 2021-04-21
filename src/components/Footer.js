import React from 'react'
import '../styles/Footer.css';
import Icons from './Icons';

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <Icons />
                <p>Auruproff OÜ</p>
                <p>Helista Meile: +372 5451 7710</p>
                <p>Kirjuta meile: info@auruproff.ee</p>
            </div> 
        </div>
    )
}

export default Footer
