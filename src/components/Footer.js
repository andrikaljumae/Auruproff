import React from 'react'
import '../styles/Footer.css';
import Icons from './Icons';

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <Icons />
                <b>Auruproff OÜ</b>
                <b>Helista Meile: +372 5451 7710</b>
                <b>Kirjuta meile: info@auruproff.ee</b>
            </div> 
        </div>
    )
}

export default Footer
