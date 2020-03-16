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
      <h2>Zal zo snel mogelijk beschikbaar gemaakt worden</h2>
      <p>In afwachting van de aanbevelingen van FOD Volkgezondheid raden we alle naaisters nu al aan <strong>minstens 2 laags katoen en geen elastieken lintjes te gebruiken</strong>, zodat de mondmaskers bij ontvangst door de ziekenhuizen gewassen kunnen worden op 90C met detergent.</p>
      <p>"De professor benadrukt dat zij die zelf aan de slag willen zich best eerst melden bij een ziekenhuis of artsenpraktijk in de buurt. Daar kunnen vrijwilligers info krijgen over het juiste materiaal en de nodige informatie. De FOD Volksgezondheid heeft alvast in een tweet aangekondigd te werken aan een patroon om zelf goede maskers te maken."</p>
      <p><a href="https://www.vrt.be/vrtnws/nl/2020/03/16/oproep-mondmaskers-ook-mensen-die-zelf-thuis-maskers-naaien-k/" target="_blanc">Bron:VRT</a></p>
      <div {...opacity}>
        <div className="value-props row">
          <div className="four columns value-prop">
            {/* <Link to="/instructies/textielmasker"> */}
            <img className="value-img" src={Mask} alt="" />
          Textielen mondmasker
{/* </Link> */}
          </div>
          <div className="four columns value-prop">
            <img className="value-img" src={Skirt} alt="" />
        Voorbind schort
      </div>
          <div className="four columns value-prop">
            <img className="value-img" src={Mould} alt="" />
        FFP masker
      </div>
        </div>
      </div>
    </>
  )
}

export default Instructies