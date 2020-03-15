
import React from 'react'
import textielmaskerPatroon from './../../assets/textielmaskerPatroon.png'
const TextielMasker = () => {

  return (
    <>
      <h3>Snijden van de stof</h3>
      <ul>
        <li>Snij rechthoekige lappen stof van 20 x 38 cm</li>
        <li> Knip vier linten van 50 cm</li>
      </ul>
      <h3>Aftekenen van het patroon</h3>
      <img className="u-full-width" src={textielmaskerPatroon} />
      <h3>Persen van de vouwen</h3>
      <ul>
        <li>pers de zomen aan de korte zijden naar binnen</li>
        <li>pers de vouw van de omslag (op 35.5 cm) naar binnen</li>
        <li>werk vanuit het midden (18.0 cm)</li>
        <li>vouw de zwarte lijn op de rode lijn volgens de blauwe pijl (bv 14.0 cm naar 12.0 cm) • herhaal voor ieder paar zwart-rood</li>
        <li>pers de vouwen (eventueel één per één)</li>
      </ul>
      <h3>Naaien</h3>
      <ul>
        <li>stik de zomen aan de korte zijdes om</li>
        <li>als de stof goed geperst is, liggen de vouwen misschien stabiel genoeg, indien niet: stik de
      vouwen vast, stik hierbij in de lange zoom</li>
        <li>stik de omslag vast, stik in de lange zoom</li>
        <li>zet aan iedere hoek een lint vast met een speld, het lint staat loodrecht op de LANGE zijde</li>
        <li>vouw het masker langs de middenlijn (op 18.0 cm) zodanig dat de verkeerde kant langs buiten
        ligt (je kan dit makkelijk checken aan de zoom op de korte kant en de omslag: die moeten
      zichtbaar zijn)</li>
        <li>De lintjes horen netjes aan de binnenkant te zitten (let op dat je ze niet tussen de zijnaden naait!)</li>
        <li>Stik de zijnaden</li>
      </ul>
      <h3>Afwerking</h3>
      <ul>
        <li>Draai het masker binnenste buiten langs de open kant(waar de zoom en omslag zitten)</li>
        <li>Klaar!</li>
        <li>Eventueel vullen met een filter</li>
      </ul>

    </>
  )

}


export default TextielMasker