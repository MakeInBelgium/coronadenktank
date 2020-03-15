import React from 'react'
import { Link } from 'react-router-dom'

import Mask from './../assets/mask.svg'
import Skirt from './../assets/skirt.svg'
import Glove from './../assets/glove.svg'

const Instructies = () => {

  return (

    <div className="value-props row">
      <div className="four columns value-prop">
        <Link to="/textielmasker">
          <img className="value-img" src={Mask} />
          Textielen mondmasker</Link>
      </div>
      <div className="four columns value-prop">
        <img className="value-img" src={Skirt} />
        Voorbind schort
      </div>
      <div className="four columns value-prop">
        <img className="value-img" src={Glove} />
        Alternatieven
      </div>
    </div>
  )
}

export default Instructies