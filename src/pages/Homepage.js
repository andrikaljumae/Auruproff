import React from 'react'
import '../styles/Homepage.css';
import Navbar from '../components/Navbar';


function Homepage() {
  return (
    <div className="Homepage">
      <div className="wrapper">
        <div className="Title">
            <Navbar/>
            <div className="Header-middle">
                <p style={{fontSize: 36}}>AURUPESU | SURVEPESU | KAITSETÖÖTLUS | JÄÄPUHASTUS |</p>
                <p style={{fontSize: 24}}>Auruproff on väikeettevõte, mille taga on pühendunud meeskond.</p>
                <p style={{fontSize: 22}}>Iga objekt on unikaalne ning teeme just Sinu soovidest ja vajadustest lähtuva pakkumise!</p>
                <br></br>
                <b style={{fontSize: 36}}>SOOVIN HINNAPAKKUMIST!</b>
            </div>
        </div>
      </div>
      <div className="Body">
        <b style={{fontSize: 34}}>AURUPROFF</b>
        <p style={{fontSize: 28}}>aitab Sind erinevate pindade puhastusel – meie pakutavate eripuhastusteenuste hulka kuuluvad aurupesu, kuumavee survepesu, jääpuhastus ja pindade kaitsetöötlus.</p>
        <p>_______________________________________________</p>
        <div className="Bullet_list" style={{lineHeight: 2}}>
          <b style={{fontSize: 28}}>ERIPUHASTUSTEENUSED:</b>
          <ul class="a" style={{marginTop: 15}}>
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
    </div>
  )
}
export default Homepage;