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
    </div>
  )
}

export default PromoMateriaalLijst