
import React from 'react'
import { css } from 'glamor'
import result from './../../assets/masker/result.jpg'
import doorsnede from './../../assets/masker/textiel/masker_textiel.001.jpeg'
import patroon from './../../assets/masker/textiel/masker_textiel.002.jpeg'

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
      <h3>Concept</h3>
      <p>Dit masker heeft een stoffen wasbare buitenlaag zodat het hergebruikt kan worden.</p>
      <p>Het werkt als een mini kussensloop: onderaan zit een opening met een omslag, net zoals bij de meeste kussenslopen. In die opening kan een vervangbare filter geschoven worden die dan door de omslag op zijn plaats gehouden wordt.</p>
      <p>Dit model is gebaseerd op een ontwerp van een Taiwanese arts en verder uitgewerkt op basis van info over de zelfgemaakte maskers van het AZ Sint Maarten te Mechelen.</p>
      <p><a href="https://mustsharenews.com/cloth-face-mask/" target="_blanc">(https://mustsharenews.com/cloth-face-mask/)</a></p>
      <h3>Instructies voor gebruik</h3>
      <ul>
        <li>indien mondmasker of filter nat is: vervangen</li>
        <li>het mondmasker zo vaak mogelijk steriliseren en/of wassen: steriliseren doe je door het masker minstens 10 minuten in water van meer dan 70°C onder te dompelen</li>
      </ul>
      <h3>Disclaimer</h3>
      <p>Handen wassen en afstand houden blijft belangrijk!</p>
      <h3>Moeilijkheidsgraad</h3>
      <p><strong>Medium</strong>: het patroon is rechthoekig dus eenvoudig om uit te snijden, maar de plooitjes vergen toch enige handigheid.</p>

      <h3 id="maat">Maat</h3>

      <p>Large</p>
      <p>Om een kleinere maat te maken kan je:</p>
      <p>de breedte versmallen: L = 20cm, M = 19cm, S = 18cm</p>
      <p>de lengte inkorten door het stuk tussen 0.5 en 6.0 en het stuk tussen 30.0 en 35.5 (zie patroon) met dezelfde afstand in te korten. Dus van beide stukken neem je evenveel weg. Eventueel maak je ook het stuk tussen 14.0 en 24.0 korter. Je kan dit eenvoudig doen door het patroon gewoon over te tekenen en het patroon vervolgens op de hierboven beschreven plaatsen een plooi te maken.</p>
      <h3 id="doorsnede">Doorsnede</h3>
      <img src={doorsnede} alt="doorsnede van het masker" />

      <h3 id="materiaal">Materiaal</h3>

      <ul>
        <li>lap stof voor de buitenkant 20 x 38 cm: de stof moet goed ademen en mag geen vocht absorberen. Gebruik dus bij voorkeur een synthetische stof (nylon, polyester). Vermijd stoffen die heel erg rekken omdat het masker dan minder goed zijn vorm zal houden. Stoffen met veel rek zijn ook moeilijker te verwerken onder de naaimachine. Was de stof eventueel voor zodat je masker niet te veel krimpt bij zijn eerste (hete) sterilisatiebeurt.</li>

        <li>4 linten van 50 cm</li>

        <li>vervangbaar filtermateriaal 17 x 13 cm (bv. bakpapier)</li>
      </ul>


      <h3 id="productielijn">Productielijn</h3>

      <ul>
        <li>om de productie te versnellen kan er aan de band gewerkt worden door alle stappen afzonderlijk na elkaar voor een aantal maskers te herhalen: bv: snij eerste 10 lappen stof, veertig linten, vervolgens tienmaal het patroon aftekenen, enz. Zo vermijd je om iedere keer van focus en materiaal te moeten wijzigen</li>

        <li>dit bandwerk kan eventueel verdeelt worden: 1 iemand snijdt, één iemand tekent het patroon over, enz.</li>

        <li>deze verdeling kan eventueel opgesplitst worden over verschillende locaties: bv. Pieter levert
        stof aan Jos, Jos snijdt stof, Marie komt oppikken en tekent patroon uit, Marie’s vrouw Eva
strijkt plooien, waarna Anna de gestreken stof komt oppikken en naar Mark voert, enzovoorts ...</li>
      </ul>

      <h3 id="snijdenvandestof">Snijden van de stof</h3>

      <ul>
        <li>snij rechthoekige lappen stof van 20 x 38 cm</li>

        <li>knip vier linten van 50 cm</li>
      </ul>

      <h3 id="aftekenenvanhetpatroon">Aftekenen van het patroon</h3>

      <h3 id="persenvandevouwen">Persen van de vouwen</h3>

      <ul>
        <li>pers de zomen aan de korte zijden naar binnen</li>

        <li>pers de vouw van de omslag (op 35.5 cm) naar binnen</li>

        <li>werk vanuit het midden (18.0 cm)</li>

        <li>leg het werkstuk met de goeie kant naar boven: zoom en omslag zijn naar de tafel toe gekeerd</li>

        <li>vouw de zwarte lijn op de rode lijn volgens de blauwe pijl (bv 14.0 cm naar 12.0 cm)</li>

        <li>herhaal voor ieder paar zwart-rood</li>

        <li>pers de vouwen (eventueel één per één)</li>
      </ul>

      <h3 id="naaien">Naaien</h3>
      <img src={patroon} alt="patroon van het masker" />
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

      <h3 id="afwerking">Afwerking</h3>

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