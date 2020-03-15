import React from 'react'
import { Link } from 'react-router-dom'

const Instructies = () => {

  return (

    <div className="value-props row">
      <div className="four columns value-prop">
        <img className="value-img" src="images/feather.svg" />
        <Link to="/textielmasker">Textielen mondmasker</Link>
      </div>
      <div className="four columns value-prop">
        <img className="value-img" src="images/pens.svg" />
        Voorbind schort
      </div>
      <div className="four columns value-prop">
        <img className="value-img" src="images/watch.svg" />
        Alternatieven
      </div>
    </div>
  )
}

export default Instructies