
import React from 'react'
import { css } from 'glamor'
import result from './../../assets/masker/result.jpg'
import doorsnede from './../../assets/masker/textiel/masker_textiel.001.jpeg'
import patroon from './../../assets/masker/textiel/masker_textiel.002.jpeg'
import textielmaskerPatroon from './../../assets/textielmaskerPatroon.png'

const bumper = css({
  width: '100%',
  height: '60vh',
  marginBottom: '50px',
  background: `url(${result}) center center no-repeat`,
  backgroundSize: 'cover'
})

const spacer = css({
  marginBottom: '150px'
})

const TextielMasker = () => {

  return (
    <>
      <div {...bumper}></div>


      <h1 id="stoffenmedischverzorgingsmaskermetvervangbarefilter">Stoffen medisch verzorgingsmasker met vervangbare filter</h1>

      <h3 id="maat">Maat</h3>

      <p>Large</p>

      <h3 id="doorsnede">Doorsnede</h3>
      <img src={doorsnede} />

      <h3 id="materiaal">Materiaal</h3>

      <ul>
        <li>lap stof voor de buitenkant (TODO: te bepalen welke stof) 20 x 38 cm</li>

        <li>4 linten van 50 cm</li>

        <li>vervangbaar filtermateriaal 17 x 13 cm (TODO: juiste afmetingen nog testen)</li>
      </ul>

      <h3 id="productiestappen">Productiestappen</h3>

      <h2 id="productielijn">Productielijn</h2>

      <ul>
        <li>om de productie te versnellen kan er aan de band gewerkt worden door alle stappen afzonderlijk na elkaar voor een aantal maskers te herhalen: bv: snij eerste 10 lappen stof, veertig linten, vervolgens tienmaal het patroon aftekenen, enz. Zo vermijd je om iedere keer van focus en materiaal te moeten wijzigen</li>

        <li>dit bandwerk kan eventueel verdeelt worden: 1 iemand snijdt, één iemand tekent het patroon
over, enz.</li>

        <li>deze verdeling kan eventueel opgesplitst worden over verschillende locaties: bv. Pieter levert
        stof aan Jos, Jos snijdt stof, Marie komt oppikken en tekent patroon uit, Marie’s vrouw Eva
strijkt plooien, waarna Anna de gestreken stof komt oppikken en naar Mark voert, enzovoorts ...</li>
      </ul>

      <h2 id="snijdenvandestof">Snijden van de stof</h2>

      <ul>
        <li>snij rechthoekige lappen stof van 20 x 38 cm</li>

        <li>knip vier linten van 50 cm</li>
      </ul>

      <h2 id="aftekenenvanhetpatroon">Aftekenen van het patroon</h2>

      <h2 id="persenvandevouwen">Persen van de vouwen</h2>

      <ul>
        <li>pers de zomen aan de korte zijden naar binnen</li>

        <li>pers de vouw van de omslag (op 35.5 cm) naar binnen</li>

        <li>werk vanuit het midden (18.0 cm)</li>

        <li>leg het werkstuk met de goeie kant naar boven: zoom en omslag zijn naar de tafel toe gekeerd</li>

        <li>vouw de zwarte lijn op de rode lijn volgens de blauwe pijl (bv 14.0 cm naar 12.0 cm)</li>

        <li>herhaal voor ieder paar zwart-rood</li>

        <li>pers de vouwen (eventueel één per één)</li>
      </ul>

      <h2 id="naaien">Naaien</h2>
      <img src={patroon} />
      <ul>
        <li>stik de zomen aan de korte om</li>

        <li>stik de vouwen eventueel vast, stik in lange zoom, wellicht is dit makkelijker om later de
zijnaden dicht te stikken</li>

        <li>stik de omslag vast, stik ook hier in de lange zoom</li>

        <li>zet aan iedere hoek een lint vast met een speld (zie tekening: de linten wijzen naar de
binnenkant van het patroon)</li>

        <li>vouw het masker langs de middenlijn (op 18.0 cm) zodanig dat de verkeerde kant langs buiten
        ligt (je kan dit makkelijk checken aan de zoom op de korte kant en de omslag: die moeten
zichtbaar zijn)</li>

        <li>de lintjes horen netjes aan de binnenkant te zitten (let op dat je ze niet tussen de zijnaden naait!)</li>

        <li>stik de zijnaden</li>
      </ul>

      <h2 id="afwerking">Afwerking</h2>

      <ul>
        <li>draai het masker binnenste buiten langs de open kant (waar de zoom en omslag zitten)</li>

        <li>klaar!</li>

        <li>eventueel vullen met een filter</li>
      </ul>
      <div {...spacer} />
    </>
  )

}


export default TextielMasker