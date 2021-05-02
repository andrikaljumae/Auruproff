import React from 'react'
import '../styles/Homepage.css';
import Navbar from '../components/Navbar';
import Logo from "../components/Logo";
import Footer from '../components/Footer';


function Homepage() {
  return (
    <div className="Homepage">
      <div className="Wrapper">
        <div className="Title">
          <Logo/>
            <Navbar/>
            <div className="Header-middle">
              <div className="Services">
                <p>AURUPESU | SURVEPESU | KAITSETÖÖTLUS | JÄÄPUHASTUS |</p>
              </div>
              <div className="Introduction">
                <p>Auruproff on väikeettevõte, mille taga on pühendunud meeskond.</p>
                <p>Iga objekt on unikaalne ning teeme just Sinu soovidest ja vajadustest lähtuva pakkumise!</p>
              </div>
                <br></br>
              <div className="Offer">
                <b>SOOVIN HINNAPAKKUMIST!</b>
              </div>
            </div>
        </div>
      </div>
      <div className="Body">
        <div className="Body_title">
          <b>AURUPROFF</b>
        </div>
        <div className="Body_introduction">
          <p>aitab Sind erinevate pindade puhastusel – meie pakutavate eripuhastusteenuste hulka kuuluvad aurupesu, kuumavee survepesu, jääpuhastus ja pindade kaitsetöötlus.</p>
        </div>
        <p>_______________________________________________</p>
        <div className="Bullet_list">
          <b style={{fontSize: 28}}>ERIPUHASTUSTEENUSED:</b>
          <ul class="a">
              <li>Tänavakivi, fassaadi, katuse ja terrassi puhastus</li>
              <li>Spaade ja spordiklubide süvapuhastus</li>
              <li>Tootmisruumide puhastus</li>
              <li>Suurköökide puhastus</li>
              <li>Garaažide ja parkimismajade puhastus</li>
              <li>Veesõidukite sise- ja välipesu</li>
              <li>Tööstuspindade ja seadmete puhastus</li>
              <li>Ehitus- ja remondijärgne koristus</li>
              <li>Põrandate süvapesu ja vahatamine</li>
              <li>Grafiti eemaldus</li>
          </ul>
        </div>
      </div>
      <div className="Footer">
        <Footer/>
      </div>
    </div>
  )
}
export default Homepage;