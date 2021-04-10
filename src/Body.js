import React from 'react'
import './Body.css';


function Body() {
    return (
      <div className="Body">
        <b style={{fontSize: 25}}>AURUPROFF</b>
        <p style={{fontSize: 22}}>aitab Sind erinevate pindade puhastusel – meie pakutavate eripuhastusteenuste hulka kuuluvad aurupesu, kuumavee survepesu, jääpuhastus ja pindade kaitsetöötlus.</p>
        <p>_______________________________________________</p>
        <div className="Bullet_list" style={{lineHeight: 2}}>
        <b style={{fontSize: 23}}>ERIPUHASTUSTEENUSED:</b>
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
    )
}

export default Body