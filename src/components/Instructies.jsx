import React from 'react'
// import { Link } from 'react-router-dom'
import { css } from 'glamor'
import Mask from './../assets/mask.svg'
import Skirt from './../assets/skirt.svg'
import Mould from './../assets/mould.svg'

const opacity = css({
  opacity: 0.2,
  cursor: 'default',
  textAlign: 'center'
})

const Instructies = () => {

  return (
    <>
      <p>Onze zorgverleners hebben je nodig! Om de strijd tegen #COVID19BE te winnen, hebben ze dringend nood aan een aantal materialen zoals mondmaskers en schorten. Maar die zijn bijna uitgeput. Wij bezorgen hen alvast een back-up plan, met onze zelfgemaakte maskers en schorten. Ook jij kan helpen!
      Op deze pagina delen we de goedgekeurde patronen en handleidingen.
Haal je naaimachines boven en roep je vriend(inn)en op om mee te doen.</p>
      <div>
        <div className="value-props row">
          <div className="four columns value-prop">
            <a href="http://maakjemondmasker.be">
              <img className="value-img" src={Mask} alt="" />
              Maak je mondmasker
            </a>
          </div>
          <div className="four columns value-prop"  {...opacity}>
            <a href="https://creativestegencorona.be/">
              <img className="value-img" src={Skirt} alt="" />
              Voorbind schort
            </a>
      </div>
          <div className="four columns value-prop"  {...opacity}>
            <img className="value-img" src={Mould} alt="" />
        FFP masker
      </div>
        </div>
      </div>
    </>
  )
}

export default Instructies
