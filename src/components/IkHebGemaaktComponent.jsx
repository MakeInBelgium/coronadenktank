import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { css } from 'glamor'
import ErrorComponent from './ErrorComponent'
import { Link } from 'react-router-dom'


const menuHolder = css({
  width: '100%',
  display: 'block',
  color: '#aaa'
})
const IkHebGemaaktComponent = () => {
  const [naam, setNaam] = useState("")
  const [achternaam, setAchternaam] = useState("")
  const [email, setEmail] = useState("")
  const [telefoon, setTelefoon] = useState("")
  const [straat, setStraat] = useState("")
  const [huisnummer, setHuisnummer] = useState(null)
  const [gemeente, setGemeente] = useState("")
  const [postcode, setPostcode] = useState(null)
  const [hoeveelheid, setHoeveelheid] = useState(null)
  const [hulpmiddel, setHulpmiddel] = useState("maskers")
  const [readAndAgreed, setReadAndAgreed] = useState(false)
  const [kanOphalen, setKanOphalen] = useState(false)

  const [submitting, setSubmitting] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const sendData = () => {
      axios({
        url: `https://maakhet.be/aanbiedingen`,
        cancelToken: source.token,
        method: "POST",
        data: {
          naam,
          achternaam,
          email,
          telefoon,
          straat,
          huisnummer,
          gemeente,
          postcode,
          hoeveelheid,
          hulpmiddel,
          readAndAgreed,
          kanOphalen
        },

        headers: {
          contentType: "application/json"
        }
      })
        .then(response => {
          console.log(response)
          setData(response.data);
        })
        .catch(err => { console.log("error", err); return setError(err) });
    };

    if (submitting) {
      sendData();

    }
    return () => {
      //
    }
  }, [submitting])
  return (
    <div className="container">
      <div {...menuHolder} >
        <h2>Ik heb gemaakt</h2>
      </div>

      {
        error ? <ErrorComponent setHide={() => setError(null)} message={"Er ging iets mis, probeer aub opnieuw"} /> : null}

      <form onSubmit={(e) => {
        e.preventDefault()
        setSubmitting(true)
      }}>
        <div className="u-full-width">
          <div className="four columns">
            <label htmlFor="hoeveelheid">Hoeveelheid</label>
            <input type="number" className="u-full-width" name="hoeveelheid" value={hoeveelheid} onChange={(e) => setHoeveelheid(e.target.value)} placeholder="Vul je hoeveelheid in" />
          </div>
          <div className="eight columns">
            <label htmlFor="hulpmiddel">hulpmiddel</label>
            <select className="u-full-width" id="hulpmiddel" name="hulpmiddel" value={hulpmiddel} onChange={(e) => setHulpmiddel(e.target.value)}>
              <option value="maskers">Mondmaskers</option>
              <option value="schorten">Waterafstotende schorten</option>
            </select>
          </div>
        </div>

        <div className="u-full-width">
          <label htmlFor="naam">Naam</label>
          <input type="text" className="u-full-width" name="naam" value={naam} onChange={(e) => setNaam(e.target.value)} placeholder="Vul je voornaam in" />
        </div>
        <div className="u-full-width">
          <label htmlFor="achternaam">Achternaam</label>
          <input type="text" className="u-full-width" name="achternaam" value={achternaam} onChange={(e) => setAchternaam(e.target.value)} placeholder="Vul uw achternaam in" />
        </div>
        <hr />
        <div className="u-full-width">
          <label htmlFor="email">Email</label>
          <input type="text" className="u-full-width" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Vul je email in" />
        </div>
        <div className="u-full-width">
          <label htmlFor="telefoon">Telefoon nummer</label>
          <input type="text" className="u-full-width" name="telefoon" value={telefoon} onChange={(e) => setTelefoon(e.target.value)} placeholder="Vul uw telefoon nummer in" />
        </div>
        <hr />

        <div>
          <div className="eight columns">
            <label htmlFor="straat">Straat</label>
            <input type="text" className="u-full-width" name="straat" value={straat} onChange={(e) => setStraat(e.target.value)} placeholder="Vul uw straat in" />
          </div>
          <div className="four columns">
            <label htmlFor="huisnummer">Huisnummer</label>
            <input type="number" className="u-full-width" name="huisnummer" value={huisnummer} onChange={(e) => setHuisnummer(e.target.value)} placeholder="Vul uw huisnummer in" />
          </div>
        </div>
        <div>
          <div className="four columns">
            <label htmlFor="postcode">Postcode</label>
            <input type="number" className="u-full-width" name="postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} placeholder="Vul uw postcode in" />
          </div>
          <div className="eight columns">
            <label htmlFor="gemeente">Gemeente</label>
            <input type="text" className="u-full-width" name="gemeente" value={gemeente} onChange={(e) => setGemeente(e.target.value)} placeholder="Vul uw gemeente in" />
          </div>
        </div>
        <div>
          <label className="u-full-width">
            <input type="checkbox" checked={kanOphalen} onChange={(e) => { return setKanOphalen(e.target.checked) }} />
            <span className="label-body">Ik kan in mijn buurt hulpmiddelen verzamelen.</span>
          </label>
        </div>

        <div>
          <label className="u-full-width">
            <input type="checkbox" checked={readAndAgreed} onChange={(e) => { return setReadAndAgreed(e.target.checked) }} />
            <span className="label-body">Ik heb de <Link to="/privacy" target="_blanc">voorwaarden rond gegevensverwerking gelezen</Link></span>
          </label>
        </div>
        <div style={{ textAlign: 'right' }}>
          {readAndAgreed ?
            <input className="button-primary" type="submit" value="Verzenden" />
            :
            <input type="submit" value="Verzenden" disabled style={{ opacity: 0.5 }} />
          }

        </div>

      </form>
    </div>
  )
}

export default IkHebGemaaktComponent