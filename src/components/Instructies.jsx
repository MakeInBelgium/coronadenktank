import React from 'react'
import { Link } from 'react-router-dom'
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
      <div {...opacity}>
        <div className="value-props row">
          <div className="four columns value-prop">
            {/* <Link to="/instructies/textielmasker"> */}
            <img className="value-img" src={Mask} />
          Textielen mondmasker
{/* </Link> */}
          </div>
          <div className="four columns value-prop">
            <img className="value-img" src={Skirt} />
        Voorbind schort
      </div>
          <div className="four columns value-prop">
            <img className="value-img" src={Mould} />
        FFP masker
      </div>
        </div>
      </div>
    </>
  )
}

export default Instructies