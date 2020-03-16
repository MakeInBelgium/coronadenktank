import React from 'react'

const Home = () => {
  return (
    <div className="row twelve columns">
      <div className="six columns">
        <h3>Ik wil helpen:</h3>
        <ul>
          <li>Chatten met andere makers: <a href="https://join.coronadenktank.be/" target="_blanc"> Slack</a></li>
          <li>Overzicht van alle projecten: <a href="https://trello.com/invite/b/JLT0eWH6/19a945a650244468fbb3b557c514bc62/make-in-belgium-corona" target="_blanc">Trello board</a></li>
          <li>De ict coördinatoren van Vlaamse scholen zijn verschillende websites en mogelijkheden aan het verzamelen. <a href="https://padlet.com/karinwinters/cbk6nmdovyho" target="_blanc">Hier is al een lijst die nu online staat: Padlet </a></li>
        </ul>
      </div>
      <div className="six columns">
        <h3>Ik zoek:</h3>
        <ul>
          <li>Een manier om video's te creeëren en te delen
          <ul>
              <li>YouTube</li>
              <li>Vimeo</li>
            </ul>
          </li>
          <li>Een manier om kennis te delen
          <ul>
              <li>Google Classroom</li>
              <li>Moodle</li>
              <li>Google Documents/ Google Drive</li>
              <li>..</li>
            </ul>
          </li>
          <li>Een manier om contact te houden
            <ul>
              <li>WhatsApp (chat)</li>
              <li>Microsoft Teams (chat + video conferencing)</li>
              <li>Slack (chat + video conferencing)</li>
              <li>Discord (chat + stem)</li>
              <li>Zoom (video conferencing)</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="row">
        <h3>Socials</h3>
        <ul>
          <li><a href="https://twitter.coronadenktank.be" target="_blanc">Twitter</a></li>
          <li><a href="https://fb.coronadenktank.be" target="_blanc">Facebook</a></li>
          <li><a href="https://instagram.coronadenktank.be" target="_blanc">Instagram</a></li>
        </ul>
      </div>
    </div>

  )
}


export default Home