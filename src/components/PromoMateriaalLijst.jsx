import React from 'react'
import { css } from 'glamor'

const credit = css({
  display: 'block',
  float: 'left',
  width: '100%',
  color: '#ccc'
})

const teaser = css({
  width: '100%',
  maxWidth: '250px',
  height: '250px',
  overflow: 'hidden',
  '>img': {
    width: '100%',
    margin: 'auto'
  }
})

const PromoMateriaalLijst = () => {

  return (

    <div className="value-props row">
      <div className="four columns value-prop">
        <a href="https://www.willempirquin.be/stopcorona/" target={'_blanc'}>
          <div {...teaser}>
            <img src={'https://i1.wp.com/www.willempirquin.be/wp-content/uploads/2020/03/Afstand_Wallpaper.png?resize=1024%2C640&ssl=1'} alt="teaser of the material" />
          </div>
          Posters</a>
        <a href="https://www.willempirquin.be/" {...credit} target="_blanc" className="u-full-width">Willem pirquin</a>
      </div>
      <div className="four columns value-prop">
        <a href="http://wix.to/GsD-CKI" target={'_blanc'}>
          <div {...teaser}>
            <img src={'https://static.wixstatic.com/media/2a75a0_c9d698d617b54cb0aa30ce6de90fe1b5~mv2.jpg/v1/fill/w_165,h_146,al_c,q_80,usm_0.66_1.00_0.01/strijk%20anna.webp'} alt="teaser of the material" />
          </div>
          Planningsmateriaal</a>
        <a href="https://www.amant.be/" {...credit} target="_blanc" className="u-full-width">Kathleen Amant</a>
      </div>
    </div>
  )
}

export default PromoMateriaalLijst
