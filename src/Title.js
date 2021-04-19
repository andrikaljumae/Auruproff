import React from 'react'
import './Title.css';
import logo from './logo.png';
import Navbar from './components/Navbar';

function Title() {
  return (
    <div className="Title">
        <div className="Header-left">
            <img src={logo} width="150px" height="30px" alt="pilt" />
        </div>
        <Navbar/>
        <div className="Header-middle">
            <p>AURUPESU | SURVEPESU | KAITSETÖÖTLUS | JÄÄPUHASTUS |</p>
            <p style={{fontSize: 22}}>Auruproff on väikeettevõte, mille taga on pühendunud meeskond.</p>
            <p style={{fontSize: 22}}>Iga objekt on unikaalne ning teeme just Sinu soovidest ja vajadustest lähtuva pakkumise!</p>
            <br></br>
            <b>SOOVIN HINNAPAKKUMIST!</b>
        </div>
    </div>
  )
}
export default Title